import InfoCard from './InfoCard';

export default function RecordsCardsGrid() {
  const recordsData = [
    {
      id: 1,
      color: 'green',
      title: 'Accesos Exitosos',
      description: 'Esta semana',
      data: '47'
    },
    {
      id: 2,
      color: 'blue',
      title: 'Tiempo Promedio',
      description: 'Reconocimiento',
      data: '1.3s'
    },
    {
      id: 3,
      color: 'purple',
      title: 'Ubicaciones',
      description: 'Puntos de acceso',
      data: '3'
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
