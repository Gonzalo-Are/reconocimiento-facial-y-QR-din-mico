import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
          {/*
          <Link
            href="/camera"
            className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Escanear rostro
          </Link>
          */}
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
    </>
  );
}
