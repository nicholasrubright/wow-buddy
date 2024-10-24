import { MoveUp } from "lucide-react";

export function QuickCompare() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-semibold text-gray-900">Quick Compare</h2>
      <div className="stats mt-4 grid grid-cols-3 gap-4">
        <div className="stat">
          <div className="stat-title">Overall DPS</div>
          <div className="flex flex-row gap-10">
            <div className="stat-value">97K</div>
            <div className="stat-value">67K</div>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
        </div>
      </div>
      <div className="mt-4 rounded bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          Key Difference: Player 2 maintained 12% higher uptime on Prayer of
          Mending
        </p>
      </div>
    </div>
  );
}
