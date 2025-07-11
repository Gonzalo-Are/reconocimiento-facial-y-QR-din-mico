import AccessRecordsTable from "@/components/AccessRecordsTable";
import RecordsCardsGrid from "@/components/RecordsCardsGrid";

export default function Records() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Historial de Accesos
        </h1>
      </div>

      <RecordsCardsGrid />

      <AccessRecordsTable />
    </div>
  );
}
