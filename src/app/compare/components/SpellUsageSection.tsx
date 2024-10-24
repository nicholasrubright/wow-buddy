"use client";

import { ComparisonSection } from "./shared/ComparsionSection";
import { Chart } from "react-google-charts";

const SpellUsageChart = () => {
  const data = [
    ["Spell #1", "Spell #2"],
    [15, 30],
    [20, 19],
  ];

  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={{
        title: "Spell Usage",
      }}
      legendToggle
    />
  );
};

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
    <div className="space-y-6 rounded border p-5">
      <SpellUsageChart />
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
