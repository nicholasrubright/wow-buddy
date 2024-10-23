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

  return (
    <section className="rounded-lg bg-white shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">Key Spell Usage</h2>
        <div className="mt-4 space-y-6">
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
      </div>
    </section>
  );
}
