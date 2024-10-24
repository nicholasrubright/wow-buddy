"use client";

import { ComparisonSection } from "./shared/ComparsionSection";
import { Chart } from "react-google-charts";

const SpellUsageChart = () => {

  const spellData = [
    {
      name: "Prayer of Mending",
      player1Casts: 42,
      player2Casts: 57,
    },
    {
      name: "Flash Heal",
      player1Casts: 78,
      player2Casts: 65,
    },
    {
      name: "Renew",
      player1Casts: 35,
      player2Casts: 42,
    },
    {
      name: "Circle of Healing",
      player1Casts: 28,
      player2Casts: 31,
    },
    {
      name: "Divine Hymn",
      player1Casts: 2,
      player2Casts: 3,
    },
  ];

  const data = [
    [
      "Spell",
      "player1Name",
      { role: "style" },
      "player2Name",
      { role: "style" },
    ],
    ...spellData.map((spell) => [
      spell.name,
      spell.player1Casts,
      "#8b5cf6", // Customizable color for player 1
      spell.player2Casts,
      "#10b981", // Customizable color for player 2
    ]),
  ];

  const options = {
    titleTextStyle: {
      fontName: "Inter, system-ui, sans-serif",
      fontSize: 16,
      bold: true,
    },
    backgroundColor: "transparent",
    chartArea: {
      width: "80%",
      height: "70%",
    },
    hAxis: {
      title: "Spells",
      titleTextStyle: {
        fontName: "Inter, system-ui, sans-serif",
        italic: false,
      },
      textStyle: {
        fontName: "Inter, system-ui, sans-serif",
      },
    },
    vAxis: {
      title: "Number of Casts",
      titleTextStyle: {
        fontName: "Inter, system-ui, sans-serif",
        italic: false,
      },
      textStyle: {
        fontName: "Inter, system-ui, sans-serif",
      },
      minValue: 0,
    },
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        fontName: "Inter, system-ui, sans-serif",
      },
    },
    seriesType: "bars",
    bar: { groupWidth: "80%" },
  };

  return (
    <Chart chartType="ColumnChart" data={data} options={options} legendToggle />
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
