import Container from './Container';

export default function RegularSchedule() {
  const scheduleData = [
    {
      id: 1,
      days: 'Lunes - Jueves',
      location: 'Edificio Principal',
      hours: '08:00 - 18:00'
    },
    {
      id: 2,
      days: 'Viernes',
      location: 'Área de Oficinas',
      hours: '08:00 - 14:00'
    },
    {
      id: 3,
      days: 'Sábado',
      location: 'N/A',
      hours: 'Sin acceso'
    }
  ];

  return (
    <Container title="Horario Regular" minHeight="auto">
      <div className="space-y-3">
        {scheduleData.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{schedule.days}</h3>
              <p className="text-sm text-gray-500">{schedule.location}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-700">{schedule.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
