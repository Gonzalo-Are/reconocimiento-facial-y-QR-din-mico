"use client";

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import Container from './Container';

export default function AccessRecordsTable() {
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

  const getStatusColor = (status) => {
    return status === 'GRANTED' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusBg = (status) => {
    return status === 'GRANTED' ? 'bg-green-100' : 'bg-red-100';
  };

  const getStatusLabel = (status) => {
    return status === 'GRANTED' ? 'Exitoso' : 'Fallido';
  };

  const formatConfidence = (confidence) => {
    if (confidence === null || confidence === undefined) return 'N/A';
    return `${Math.round(confidence * 100)}%`;
  };

  if (loading) {
    return (
      <Container title="Registro Detallado">
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500">Cargando registros...</div>
        </div>
      </Container>
    );
  }

  return (
    <Container title="Registro Detallado">
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 rounded-tl-lg">Fecha y Hora</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Método</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Ubicación</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 rounded-tr-lg">Confianza</th>
              </tr>
            </thead>
            <tbody>
              {accessRecords.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 px-4 text-center text-gray-500">
                    No hay registros de acceso disponibles
                  </td>
                </tr>
              ) : (
                accessRecords.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{formatDate(record.timestamp)}</p>
                        <p className="text-sm text-gray-500">{formatTime(record.timestamp)}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">{record.method}</td>
                    <td className="py-3 px-4 text-gray-800">Lobby Principal</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBg(record.status)} ${getStatusColor(record.status)}`}>
                        {getStatusLabel(record.status)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{formatConfidence(record.confidence)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {accessRecords.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
              No hay registros de acceso disponibles
            </div>
          ) : (
            accessRecords.map((record) => (
              <div key={record.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">{formatDate(record.timestamp)}</p>
                    <p className="text-sm text-gray-500">{formatTime(record.timestamp)}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBg(record.status)} ${getStatusColor(record.status)}`}>
                    {getStatusLabel(record.status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Método</p>
                    <p className="text-sm font-medium text-gray-900">{record.method}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ubicación</p>
                    <p className="text-sm text-gray-900">Lobby Principal</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}
