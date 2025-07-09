import { Calendar, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import InfoCard from './InfoCard';

export default function InfoCardsGrid() {
  const cardsData = [
    {
      id: 1,
      color: 'blue',
      title: 'Accesos Hoy',
      description: 'Número de veces que has accedido al edificio',
      icon: Clock,
      data: '3',
    },
    {
      id: 2,
      color: 'green',
      title: 'Estado de Registro',
      description: 'Tu perfil facial está verificado y activo',
      icon: CheckCircle,
      data: 'Activo',
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
      title: 'Tiempo Promedio',
      description: 'Tiempo promedio de reconocimiento facial',
      icon: TrendingUp,
      data: '1.2s',
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
