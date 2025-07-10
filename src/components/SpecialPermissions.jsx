import Container from './Container';

export default function SpecialPermissions() {
  const permissionsData = [
    {
      id: 1,
      location: 'Lobby',
      status: 'Activo'
    },
    {
      id: 2,
      location: 'Salón General',
      status: 'Activo'
    },
    {
      id: 3,
      location: 'Casino',
      status: 'Inactivo'
    }
  ];

  const getStatusColor = (status) => {
    return status === 'Activo' ? 'text-green-700' : 'text-red-700';
  };

  const getStatusBg = (status) => {
    return status === 'Activo' ? 'bg-green-100' : 'bg-red-100';
  };

  return (
    <Container title="Permisos" minHeight="auto">
      <div className="space-y-3">
        {permissionsData.map((permission) => (
          <div
            key={permission.id}
            className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{permission.location}</h3>
            </div>
            <div>
              <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBg(permission.status)} ${getStatusColor(permission.status)}`}>
                {permission.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
