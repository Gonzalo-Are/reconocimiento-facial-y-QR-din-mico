import Image from "next/image";

export default function AuthLayout({children}) {
  return (
    <div className="flex min-h-screen">
      {/* columna izquierda */}
      <div className="hidden md:flex md:w-1/2 h-screen relative">
        <Image
          src="/images/auth-background.png" 
          alt="Persona escaneando un código QR"
          fill
          // sizes="50vw"
          className="object-cover object-center"
          priority
        />
      </div>
      {/* columna derecha */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center bg-zinc-200">
        {children}
      </div>
    </div>
  )
}
