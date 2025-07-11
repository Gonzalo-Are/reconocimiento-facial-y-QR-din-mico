"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function CustomNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-white mb-4">404</h1>

        <h2 className="text-2xl font-medium text-white mb-6">
          Página no encontrada
        </h2>

        <p className="text-gray-300 mb-8">
          Lo sentimos, la ruta que buscas no existe o fue movida.
        </p>

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
          <Link href="/perfil">
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
