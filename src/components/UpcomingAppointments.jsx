import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Plus, QrCode } from 'lucide-react';

export default function UpcomingAppointments() {
  const appointmentsData = [
    {
      id: 1,
      date: 'Hoy',
      time: '14:30',
      title: 'Reunión Proyecto Alpha',
      location: 'Sala 203',
      status: 'Tienes acceso'
    },
    {
      id: 2,
      date: 'Mañana',
      time: '10:00',
      title: 'Entrevista Candidato',
      location: 'Sala 105',
      status: 'Pendiente'
    },
    {
      id: 3,
      date: '13/06',
      time: '16:00',
      title: 'Presentación Cliente',
      location: 'Auditorio',
      status: 'Sin acceso'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tienes acceso':
        return 'text-green-700';
      case 'Pendiente':
        return 'text-yellow-700';
      case 'Sin acceso':
        return 'text-red-700';
      default:
        return 'text-gray-700';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Tienes acceso':
        return 'bg-green-100';
      case 'Pendiente':
        return 'bg-yellow-100';
      case 'Sin acceso':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      {/* Header with title and dialogue */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Próximas Citas</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4" />
              Nueva Cita
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva Cita</DialogTitle>
              <DialogDescription>
                Aquí puedes programar una nueva cita o reunión.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-gray-600">
                Formulario para crear nueva cita (pendiente de implementar).
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* List of appointments */}
      <div className="space-y-3">
        {appointmentsData.map((appointment) => (
          <div
            key={appointment.id}
            className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Left column: Date and time */}
            <div className="flex flex-col sm:items-start sm:min-w-0 sm:w-auto">
              <span className="text-sm font-medium text-gray-500 mb-1 whitespace-nowrap">{appointment.date}</span>
              <span className="text-xl font-bold text-gray-900 whitespace-nowrap">{appointment.time}</span>
            </div>

            {/* Central column: Title and ubication */}
            <div className="flex flex-col justify-center min-w-0 sm:ml-3">
              <h3 className="font-semibold text-gray-800 mb-1 truncate">{appointment.title}</h3>
              <p className="text-sm text-gray-500 truncate">{appointment.location}</p>
            </div>

            {/* Right column: Status and QR button */}
            <div className="flex items-start sm:items-center justify-between sm:justify-end gap-2 sm:min-w-0 sm:w-auto">
              <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getStatusBg(appointment.status)} ${getStatusColor(appointment.status)}`}>
                {appointment.status}
              </span>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-gray-300 hover:bg-gray-50 flex-shrink-0">
                <QrCode className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
