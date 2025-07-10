import RegularSchedule from "@/components/RegularSchedule";
import SpecialPermissions from "@/components/SpecialPermissions";
import UpcomingAppointments from "@/components/UpcomingAppointments";

export default function SchedulesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Mis Horarios</h1>
      </div>

      {/* Contenedores lado a lado en desktop, apilados en mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Horario Regular */}
        <RegularSchedule />
        {/* Permisos Especiales */}
        <SpecialPermissions />
      </div>

      {/* Próximas Citas - Ancho completo */}
      <UpcomingAppointments />
    </div>
  );
}
