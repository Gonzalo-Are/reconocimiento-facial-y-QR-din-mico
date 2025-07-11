"use client";

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from './Container';

export default function RecentAccessList() {
  const { user } = useUser();
  const [accessRecords, setAccessRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessRecords = async () => {
      try {
        const response = await fetch(`/api/access-record?userId=${user?.id}`);
        const data = await response.json();

        if (data.success) {
          setAccessRecords(data.records);
        }
      } catch (error) {
        console.error('Error al obtener registros:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchAccessRecords();
    }
  }, [user?.id]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();

    // Verificar si es hoy
    const isToday = date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      return 'Hoy';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getStatusLabel = (status) => {
    return status === 'GRANTED' ? 'Exitoso' : 'Fallido';
  };

  const getActionDescription = (method, status) => {
    if (status === 'GRANTED') {
      return `Acceso con ${method}`;
    } else {
      return `Intento fallido con ${method}`;
    }
  };

  // Show only the first 4 access records
  const displayedAccess = accessRecords.slice(0, 4);
  const hasMore = accessRecords.length > 4;

  const getStatusColor = (status) => {
    return status === 'GRANTED' ? 'text-green-600' : 'text-red-600';
  };

  const getIndicatorColor = (status) => {
    return status === 'GRANTED' ? 'bg-green-500' : 'bg-red-500';
  };

  if (loading) {
    return (
      <Container title="Mis Accesos Recientes" minHeight="480px" maxHeight="480px">
        <div className="flex justify-center items-center h-full">
          <div className="text-gray-500">Cargando accesos...</div>
        </div>
      </Container>
    );
  }

  return (
    <Container title="Mis Accesos Recientes" minHeight="480px" maxHeight="480px">
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-3">
          {displayedAccess.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <div className="text-gray-500">No hay accesos recientes</div>
            </div>
          ) : (
            displayedAccess.map((access) => (
              <div
                key={access.id}
                className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${getIndicatorColor(access.status)} rounded-full`}></div>
                  <div>
                    <p className="font-medium text-gray-800">{getActionDescription(access.method, access.status)}</p>
                    <p className="text-sm text-gray-500">Lobby</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">
                    {formatDate(access.timestamp)} {formatTime(access.timestamp)}
                  </p>
                  <p className={`text-xs ${getStatusColor(access.status)}`}>{getStatusLabel(access.status)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {hasMore && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Button variant="ghost" size="sm" asChild className="w-full">
              <Link href="/records">
                Ver todos los accesos ({accessRecords.length})
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
