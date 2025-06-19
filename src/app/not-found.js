"use client";

import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function CustomNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Título grande en blanco */}
        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>

        {/* Subtítulo en blanco */}
        <h2 className="text-2xl font-medium text-white mb-6">
          Página no encontrada
        </h2>

        {/* Texto descriptivo en gris claro */}
        <p className="text-gray-300 mb-8">
          Lo sentimos, la ruta que buscas no existe o fue movida.
        </p>

        {/* Botones condicionales según el estado de autenticación */}
        <SignedOut>
          <Link href="/">
            <button
              className="
                bg-white text-black font-semibold
                px-6 py-3 rounded-lg
                hover:bg-gray-200 transition
              "
            >
              Volver al inicio
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard">
            <button
              className="
                bg-white text-black font-semibold
                px-6 py-3 rounded-lg
                hover:bg-gray-200 transition
              "
            >
              Volver al dashboard
            </button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
}
