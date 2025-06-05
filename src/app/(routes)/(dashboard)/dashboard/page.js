export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Panel de Control
      </h1>

      {/* Grid Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Tarjeta Principal - Más grande */}
        <div className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
          <div className="h-48 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reconocimiento Facial
              </h3>
              <p className="text-gray-600 text-sm">
                Sistema de autenticación biométrica avanzada
              </p>
            </div>
            <div className="flex items-center text-blue-600 font-medium">
              <span className="text-2xl font-bold mr-2">124</span>
              <span className="text-sm">registros hoy</span>
            </div>
          </div>
        </div>

        {/* Tarjeta Secundaria Superior Derecha */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
          <div className="h-48 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Códigos QR
              </h3>
              <p className="text-gray-600 text-sm">
                Generación y gestión de códigos QR dinámicos
              </p>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="text-xl font-bold mr-2">89</span>
              <span className="text-sm">códigos activos</span>
            </div>
          </div>
        </div>

        {/* Tarjeta Inferior Izquierda */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
          <div className="h-48 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Gestión de Usuarios
              </h3>
              <p className="text-gray-600 text-sm">
                Administración de perfiles y permisos
              </p>
            </div>
            <div className="flex items-center text-purple-600 font-medium">
              <span className="text-xl font-bold mr-2">32</span>
              <span className="text-sm">usuarios registrados</span>
            </div>
          </div>
        </div>

        {/* Tarjeta Inferior Derecha */}
        <div className="lg:col-span-2 bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
          <div className="h-48 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Estadísticas y Reportes
              </h3>
              <p className="text-gray-600 text-sm">
                Análisis de datos y métricas de rendimiento del sistema
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-orange-600 font-medium">
                <span className="text-xl font-bold mr-2">98.5%</span>
                <span className="text-sm">precisión</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Último análisis</div>
                <div className="text-sm font-medium text-gray-700">
                  Hace 2 horas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de acciones rápidas */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2A1.5 1.5 0 019.5 14h-8A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2h8A1.5 1.5 0 0111 3.5v2a.5.5 0 01-1 0v-2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Nuevo Registro
            </span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Generar QR
            </span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">
              Ver Usuarios
            </span>
          </button>

          <button className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Reportes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
