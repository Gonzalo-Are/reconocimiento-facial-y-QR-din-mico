import Container from './Container';

export default function AccessRecordsTable() {
  const accessRecords = [
    {
      id: 1,
      date: '11/06/2025',
      time: '08:30',
      event: 'Entrada',
      location: 'Lobby Principal',
      status: 'Exitoso',
      duration: '1.2s'
    },
    {
      id: 2,
      date: '11/06/2025',
      time: '12:45',
      event: 'Salida',
      location: 'Lobby Principal',
      status: 'Exitoso',
      duration: '0.9s'
    },
    {
      id: 3,
      date: '11/06/2025',
      time: '13:30',
      event: 'Entrada',
      location: 'Lobby Principal',
      status: 'Exitoso',
      duration: '1.1s'
    },
    {
      id: 4,
      date: '10/06/2025',
      time: '18:15',
      event: 'Salida',
      location: 'Lobby Principal',
      status: 'Exitoso',
      duration: '1.0s'
    },
    {
      id: 5,
      date: '10/06/2025',
      time: '14:20',
      event: 'Entrada',
      location: 'Sala de Juntas',
      status: 'Exitoso',
      duration: '1.4s'
    },
    {
      id: 6,
      date: '09/06/2025',
      time: '09:15',
      event: 'Entrada',
      location: 'Lobby Principal',
      status: 'Fallido',
      duration: '2.1s'
    },

  ];

  const getStatusColor = (status) => {
    return status === 'Exitoso' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusBg = (status) => {
    return status === 'Exitoso' ? 'bg-green-100' : 'bg-red-100';
  };

  return (
    <Container title="Registro Detallado">
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 rounded-tl-lg">Fecha y Hora</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Evento</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Ubicación</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Estado</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 rounded-tr-lg">Tiempo</th>
              </tr>
            </thead>
            <tbody>
              {accessRecords.map((record) => (
                <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{record.date}</p>
                      <p className="text-sm text-gray-500">{record.time}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-800">{record.event}</td>
                  <td className="py-3 px-4 text-gray-800">{record.location}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBg(record.status)} ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{record.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {accessRecords.map((record) => (
            <div key={record.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">{record.date}</p>
                  <p className="text-sm text-gray-500">{record.time}</p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusBg(record.status)} ${getStatusColor(record.status)}`}>
                  {record.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Evento</p>
                  <p className="text-sm font-medium text-gray-900">{record.event}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Ubicación</p>
                  <p className="text-sm text-gray-900">{record.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
