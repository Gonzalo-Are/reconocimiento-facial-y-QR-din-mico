"use client";

import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

export default function RecordsCardsGrid() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    successfulAccess: 0,
    averageConfidence: 0,
    locations: 1
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/access-record?userId=${user?.id}`);
        const data = await response.json();

        if (data.success) {
          const records = data.records;

          // Contar accesos exitosos
          const successfulAccess = records.filter(record => record.status === 'GRANTED').length;

          // Calcular confianza promedio
          const recordsWithConfidence = records.filter(record => record.confidence !== null);
          const averageConfidence = recordsWithConfidence.length > 0
            ? recordsWithConfidence.reduce((sum, record) => sum + record.confidence, 0) / recordsWithConfidence.length
            : 0;

          setStats({
            successfulAccess,
            averageConfidence: Math.round(averageConfidence * 100), // Convertir a porcentaje
            locations: 1
          });
        }
      } catch (error) {
        console.error('Error al obtener estadísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchStats();
    }
  }, [user?.id]);

  const recordsData = [
    {
      id: 1,
      color: 'green',
      title: 'Accesos Exitosos',
      description: 'Total registrados',
      data: loading ? '--' : stats.successfulAccess.toString()
    },
    {
      id: 2,
      color: 'blue',
      title: 'Confianza Promedio',
      description: 'Reconocimiento',
      data: loading ? '--' : `${stats.averageConfidence}%`
    },
    {
      id: 3,
      color: 'purple',
      title: 'Ubicaciones',
      description: 'Puntos de acceso',
      data: loading ? '--' : stats.locations.toString()
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {recordsData.map((card) => (
        <InfoCard
          key={card.id}
          color={card.color}
          title={card.title}
          description={card.description}
          data={card.data}
        />
      ))}
    </div>
  );
}
