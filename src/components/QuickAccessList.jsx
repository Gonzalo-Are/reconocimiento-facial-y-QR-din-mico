import { Bell, Camera, Clock, QrCode } from 'lucide-react';
import Link from 'next/link';
import Container from './Container';

export default function QuickAccessList() {
  const quickActions = [
    {
      id: 1,
      title: 'Generar Código QR',
      description: 'Para acceso temporal',
      icon: QrCode,
      color: 'blue',
      emoji: '📱',
      link: '/qr'
    },
    {
      id: 2,
      title: 'Actualizar Foto',
      description: 'Mejorar reconocimiento',
      icon: Camera,
      color: 'green',
      emoji: '📷',
      link: '/facial-recognition',
    },
    {
      id: 3,
      title: 'Ver Horarios',
      description: 'Consulta tus horarios',
      icon: Clock,
      color: 'purple',
      emoji: '🗓️',
      link: '/schedules'
    },
    {
      id: 4,
      title: 'Notificaciones',
      description: 'Configurar alertas',
      icon: Bell,
      color: 'orange',
      emoji: '🔔',
      link: '/perfil'
    }
  ];

  const colorConfig = {
    blue: {
      bg: 'bg-[#DEECFE]'
    },
    green: {
      bg: 'bg-[#DFFCE9]'
    },
    purple: {
      bg: 'bg-[#F4EAFF]'
    },
    orange: {
      bg: 'bg-[#FFEED8]'
    }
  };

  return (
    <Container title="Accesos Rápidos" minHeight="400px">
      {quickActions.map((action) => {
        const config = colorConfig[action.color];
        return (
          <div
            key={action.id}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 bg-white cursor-pointer hover:shadow-sm transition-shadow duration-200"
          >
            <Link href={action.link} className="flex items-center space-x-4 w-full">
              <div className={`w-10 h-10 ${config.bg} rounded-lg flex items-center justify-center text-xl`}>
                {action.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}
