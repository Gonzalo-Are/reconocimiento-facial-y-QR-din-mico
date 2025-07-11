import InfoCardsGrid from "@/components/InfoCardsGrid";
import QuickAccessList from "@/components/QuickAccessList";
import RecentAccessList from "@/components/RecentAccessList";

export default function Perfil() {
  return (
    <div>
      <InfoCardsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAccessList />
        <QuickAccessList />
      </div>
    </div>
  );
}
