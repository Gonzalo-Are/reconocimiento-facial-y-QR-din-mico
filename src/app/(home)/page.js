import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Lock, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-[#F3F4F6]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-12 pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 mx-auto border-b border-[#334155]/50">
        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <div className="inline-block bg-[#7498FB]/60 px-3 py-1 rounded-full text-sm font-medium text-white mb-2">
            Seguridad de Nivel Empresarial
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#E5E7EB]">
            Sistema de Reconocimiento Facial
          </h1>
          <p className="max-w-[42rem] text-[#E5E7EB]/80 sm:text-xl">
            Control de acceso inteligente y seguro para su establecimiento, diseñado para empresas que valoran la protección y eficiencia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link href="/sign-up">
              <Button size="lg" className="gap-2 cursor-pointer bg-[#FACC15] hover:bg-[#FACC15]/80 text-[#0F172A] font-semibold hover:text-[#1E293B]">
                Comenzar Ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="cursor-pointer border-[#3B82F6] text-[#3B82F6] hover:bg-[#E5E7EB] hover:text-black font-semibold">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="space-y-12 py-16 md:py-20 lg:py-24 mx-auto container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#E5E7EB] to-[#3B82F6]">
            Características Principales
          </h2>
          <p className="max-w-[85%] text-[#E5E7EB]/80">
            Nuestro sistema de reconocimiento facial ofrece una solución completa para el control de acceso corporativo
          </p>
        </div>

        <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 md:max-w-5xl lg:max-w-6xl lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#334155] bg-[#1E293B]/70 p-6 transition-all hover:border-[#FACC15] hover:bg-[#1E293B]">
            <div className="rounded-full bg-[#3B82F6]/10 p-3">
              <Shield className="h-7 w-7 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#E5E7EB]">Seguridad Avanzada</h3>
            <p className="text-center text-[#E5E7EB]/80">
              Reconocimiento facial de alta precisión para un control de acceso seguro y fiable en entornos empresariales
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#334155] bg-[#1E293B]/70 p-6 transition-all hover:border-[#FACC15] hover:bg-[#1E293B]">
            <div className="rounded-full bg-[#3B82F6]/10 p-3">
              <BarChart3 className="h-7 w-7 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#E5E7EB]">Análisis en Tiempo Real</h3>
            <p className="text-center text-[#E5E7EB]/80">
              Monitoreo y estadísticas detalladas de entradas y salidas para optimizar sus operaciones de seguridad
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#334155] bg-[#1E293B]/70 p-6 transition-all hover:border-[#FACC15] hover:bg-[#1E293B]">
            <div className="rounded-full bg-[#3B82F6]/10 p-3">
              <Lock className="h-7 w-7 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-[#E5E7EB]">Gestión de Permisos</h3>
            <p className="text-center text-[#E5E7EB]/80">
              Control total sobre quién puede acceder a sus instalaciones, con niveles personalizables de autorización
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
