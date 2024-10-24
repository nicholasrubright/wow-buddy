import PlayerSelector from "./components/PlayerSelect";
import { FightSelect } from "./components/FightSelect";
import { QuickCompare } from "./components/QuickCompare";
import { SpellUsageSection } from "./components/SpellUsageSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 pb-8">
        <div className="sticky z-40 bg-gray-50 pb-2 pt-4">
          <PlayerSelector />
          <div className="mt-4">
            <FightSelect />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <QuickCompare />
          <SpellUsageSection />
        </div>
      </main>
    </div>
  );
}
