"use client";

import { useUser } from '@clerk/nextjs';
import { Calendar, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

export default function InfoCardsGrid() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [todayStats, setTodayStats] = useState({
    accessesToday: 0,
    averageConfidenceToday: 0
  });
  const [profileStatus, setProfileStatus] = useState({
    hasAvatar: false,
    loading: true
  });

  useEffect(() => {
    const fetchTodayStats = async () => {
      try {
        const response = await fetch(`/api/access-record?userId=${user?.id}`);
        const data = await response.json();

        if (data.success) {
          const records = data.records;

          // Obtener fecha actual en formato ISO (solo fecha, sin hora)
          const today = new Date();
          const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const todayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

          // Filtrar registros de hoy
          const todayRecords = records.filter(record => {
            const recordDate = new Date(record.timestamp);
            return recordDate >= todayStart && recordDate < todayEnd;
          });

          // Contar accesos exitosos de hoy
          const accessesToday = todayRecords.filter(record => record.status === 'GRANTED').length;

          // Calcular confianza promedio de hoy
          const todayRecordsWithConfidence = todayRecords.filter(record => record.confidence !== null);
          const averageConfidenceToday = todayRecordsWithConfidence.length > 0
            ? todayRecordsWithConfidence.reduce((sum, record) => sum + record.confidence, 0) / todayRecordsWithConfidence.length
            : 0;

          setTodayStats({
            accessesToday,
            averageConfidenceToday: Math.round(averageConfidenceToday * 100) // Convertir a porcentaje
          });
        }
      } catch (error) {
        console.error('Error al obtener estadísticas de hoy:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProfileStatus = async () => {
      try {
        const response = await fetch(`/api/profile?userId=${user?.id}`);
        const data = await response.json();

        setProfileStatus({
          hasAvatar: !!data.avatarUrl,
          loading: false
        });
      } catch (error) {
        console.error('Error al obtener estado del perfil:', error);
        setProfileStatus({
          hasAvatar: false,
          loading: false
        });
      }
    };

    if (user?.id) {
      fetchTodayStats();
      fetchProfileStatus();
    }
  }, [user?.id]);

  const cardsData = [
    {
      id: 1,
      color: 'blue',
      title: 'Accesos Hoy',
      description: 'Número de veces que has accedido al edificio',
      icon: Clock,
      data: loading ? '--' : todayStats.accessesToday.toString(),
    },
    {
      id: 2,
      color: profileStatus.loading ? 'green' : (profileStatus.hasAvatar ? 'green' : 'red'),
      title: 'Estado de Registro',
      description: profileStatus.loading
        ? 'Verificando estado del perfil...'
        : (profileStatus.hasAvatar
          ? 'Tu perfil facial está verificado y activo'
          : 'Debes subir una foto de tu cara para usar el reconocimiento'),
      icon: CheckCircle,
      data: profileStatus.loading ? '--' : (profileStatus.hasAvatar ? 'Activo' : 'Inactivo'),
    },
    {
      id: 3,
      color: 'purple',
      title: 'Próxima Reunión',
      description: 'Tu siguiente cita programada en el edificio',
      icon: Calendar,
      data: '14:30',
      badge: 'Sala 203'
    },
    {
      id: 4,
      color: 'orange',
      title: 'Confianza Promedio',
      description: 'Confianza promedio de reconocimiento facial hoy',
      icon: TrendingUp,
      data: loading ? '--' : `${todayStats.averageConfidenceToday}%`,
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {cardsData.map((card) => (
        <InfoCard
          key={card.id}
          color={card.color}
          title={card.title}
          description={card.description}
          icon={card.icon}
          data={card.data}
          badge={card.badge}
        />
      ))}
    </div>
  );
}
