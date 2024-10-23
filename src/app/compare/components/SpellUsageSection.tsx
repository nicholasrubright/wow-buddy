import { ComparisonSection } from "./ComparsionSection";

export function SpellUsageSection() {
  const spells = [
    {
      name: "Prayer of Mending",
      player1: 42,
      player2: 57,
      difference: 15,
    },
    {
      name: "Flash Heal",
      player1: 78,
      player2: 65,
      difference: -13,
    },
  ];

  const mainContent = (
    <div className="space-y-6">
      {spells.map((spell) => (
        <div key={spell.name} className="space-y-2">
          <h3 className="font-medium text-gray-900">{spell.name}</h3>
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-4 w-48 rounded bg-indigo-500"></div>
                <div className="mt-1 h-4 w-72 rounded bg-emerald-500"></div>
              </div>
              <div className="ml-4 text-sm">
                <div>Player 1: {spell.player1} casts</div>
                <div>
                  Player 2: {spell.player2} casts (
                  {spell.difference > 0 ? "+" : ""}
                  {spell.difference})
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const additionalDetails = (
    <ul className="space-y-2 text-sm text-gray-600">
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>
          Player 2's higher Prayer of Mending casts resulted in 15% more bounce
          healing
        </span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>
          Player 1 relied more heavily on direct healing with Flash Heal
        </span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>
          Different playstyles suggest varying approaches to mana efficiency
        </span>
      </li>
    </ul>
  );

  return (
    <ComparisonSection
      title="Key Spell Usage"
      mainContent={mainContent}
      details={additionalDetails}
    />
  );
}
