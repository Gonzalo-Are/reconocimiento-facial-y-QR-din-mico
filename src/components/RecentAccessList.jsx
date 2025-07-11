import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from './Container';

export default function RecentAccessList() {
  const recentAccess = [
    {
      id: 1,
      action: 'Entrada principal',
      location: 'Lobby',
      time: '08:30',
      status: 'Exitoso'
    },
    {
      id: 2,
      action: 'Salida para almuerzo',
      location: 'Lobby',
      time: '12:45',
      status: 'Exitoso'
    },
    {
      id: 3,
      action: 'Regreso de almuerzo',
      location: 'Lobby',
      time: '13:30',
      status: 'Fallido'
    },
    {
      id: 4,
      action: 'Salida',
      location: 'Lobby',
      time: 'Ayer 18:15',
      status: 'Exitoso'
    },
    {
      id: 5,
      action: 'Entrada principal',
      location: 'Lobby',
      time: 'Hoy 08:30',
      status: 'Exitoso'
    },
    {
      id: 6,
      action: 'Salida',
      location: 'Lobby',
      time: 'Ayer 18:15',
      status: 'Exitoso'
    },
    {
      id: 7,
      action: 'Salida',
      location: 'Lobby',
      time: 'Ayer 18:15',
      status: 'Exitoso'
    },
    {
      id: 8,
      action: 'Salida',
      location: 'Lobby',
      time: 'Ayer 18:15',
      status: 'Exitoso'
    },
    {
      id: 9,
      action: 'Salida',
      location: 'Lobby',
      time: 'Ayer 18:15',
      status: 'Exitoso'
    },
  ];
  
  // Show only the first 4 access records
  const displayedAccess = recentAccess.slice(0, 4);
  const hasMore = recentAccess.length > 4;

  const getStatusColor = (status) => {
    return status === 'Exitoso' ? 'text-green-600' : 'text-red-600';
  };

  const getIndicatorColor = (status) => {
    return status === 'Exitoso' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <Container title="Mis Accesos Recientes" minHeight="480px" maxHeight="480px">
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-3">
          {displayedAccess.map((access) => (
            <div
              key={access.id}
              className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 ${getIndicatorColor(access.status)} rounded-full`}></div>
                <div>
                  <p className="font-medium text-gray-800">{access.action}</p>
                  <p className="text-sm text-gray-500">{access.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">{access.time}</p>
                <p className={`text-xs ${getStatusColor(access.status)}`}>{access.status}</p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Button variant="ghost" size="sm" asChild className="w-full">
              <Link href="/records">
                Ver todos los accesos ({recentAccess.length})
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}
