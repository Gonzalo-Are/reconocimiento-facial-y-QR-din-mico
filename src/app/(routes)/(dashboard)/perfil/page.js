import InfoCardsGrid from "@/components/InfoCardsGrid";
import QuickAccessList from "@/components/QuickAccessList";
import RecentAccessList from "@/components/RecentAccessList";

export default function Perfil() {
  return (
    <div>
      {/* Grid de 4 cajas de información */}
      <InfoCardsGrid />

      {/* Sección de contenedores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAccessList />
        <QuickAccessList />
      </div>
    </div>
  );
}
