import AccessRecordsTable from "@/components/AccessRecordsTable";
import RecordsCardsGrid from "@/components/RecordsCardsGrid";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Historial de Accesos
        </h1>
        {/* TODO: hacer boton para poder filtrar por semana */}
      </div>

      {/* Grid de 3 tarjetas de estadísticas */}
      <RecordsCardsGrid />

      {/* Tabla de registros detallados */}
      <AccessRecordsTable />
    </div>
  );
}
