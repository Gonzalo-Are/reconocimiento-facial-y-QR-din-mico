import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-12 pt-24 pb-8 md:pt-32 md:pb-12 lg:pt-40 lg:pb-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sistema de Reconocimiento Facial
          </h1>
          <p className="max-w-[42rem] text-muted-foreground sm:text-xl">
            Control de acceso inteligente y seguro para su establecimiento
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2 cursor-pointer">
                Comenzar Ahora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="cursor-pointer">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="space-y-12 py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">Características Principales</h2>
          <p className="max-w-[85%] text-muted-foreground">
            Nuestro sistema de reconocimiento facial ofrece una solución completa para el control de acceso
          </p>
        </div>

        <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 md:max-w-5xl lg:max-w-6xl lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Seguridad Avanzada</h3>
            <p className="text-center text-muted-foreground">
              Reconocimiento facial de alta precisión para un control de acceso seguro
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Análisis en Tiempo Real</h3>
            <p className="text-center text-muted-foreground">
              Monitoreo y estadísticas detalladas de entradas y salidas
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Gestión de Permisos</h3>
            <p className="text-center text-muted-foreground">
              Control total sobre quién puede acceder a sus instalaciones
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
