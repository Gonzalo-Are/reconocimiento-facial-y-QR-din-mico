import QRUsuario from '@/components/ui/QRUsuario'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <>
          <SignedIn>
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
              <QRUsuario />
            </div>
          </SignedIn>
    
          <SignedOut>
            <div className="p-6 text-center text-gray-600">
              <p>
              Por favor,{' '}
            <Link href="/sign-in" className="text-blue-500 underline">
              inicia sesión
            </Link>{' '}
            para ver tu código QR.
              </p>
            </div>
          </SignedOut>
        </>
      )
}