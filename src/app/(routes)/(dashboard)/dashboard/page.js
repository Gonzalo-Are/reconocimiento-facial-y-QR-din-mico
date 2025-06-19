import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-700/90 mb-8 backdrop-blur-sm">
        Panel de Control
      </h1>

      {/* Grid Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Tarjeta Principal - Más grande */}
        <div className="lg:col-span-2 lg:row-span-1 relative group">
          {/* Contenedor con efecto glassmorphism */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

          {/* Efecto Glossy - Envuelve toda la tarjeta */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="absolute top-2 left-2 right-2 h-1/4 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="relative z-10 p-8 h-64 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-blue-300/20">
                <svg
                  className="w-7 h-7 text-blue-600"
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
        <div className="relative group">
          {/* Contenedor con efecto glassmorphism */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

          {/* Efecto Glossy - Envuelve toda la tarjeta */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="absolute top-2 left-2 right-2 h-1/4 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-green-300/20">
                <svg
                  className="w-7 h-7 text-green-600"
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
        <div className="relative group">
          {/* Contenedor con efecto glassmorphism */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

          {/* Efecto Glossy - Envuelve toda la tarjeta */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="absolute top-2 left-2 right-2 h-1/4 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-purple-300/20">
                <svg
                  className="w-7 h-7 text-purple-600"
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
        <div className="lg:col-span-2 relative group">
          {/* Contenedor con efecto glassmorphism */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>

          {/* Efecto Glossy - Envuelve toda la tarjeta */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="absolute top-2 left-2 right-2 h-1/4 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="relative z-10 p-6 h-64 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 border border-orange-300/20">
                <svg
                  className="w-7 h-7 text-orange-600"
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
      <SignedIn>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
          {/* <QRUsuario /> */}
          <Link
            href="/camera"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Escanear rostro
          </Link>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="p-6 text-center text-gray-600">
          <p>
            Por favor,{" "}
            <Link href="/sign-in" className="text-blue-500 underline">
              inicia sesión
            </Link>{" "}
            para ver tu código QR.
          </p>
        </div>
      </SignedOut>
    </div>
  );
}
