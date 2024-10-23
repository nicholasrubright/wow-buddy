export function QuickCompare() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="text-xl font-semibold text-gray-900">Quick Compare</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div>
          <span className="text-sm text-gray-500">Item Level</span>
          <div className="mt-1 text-lg">447 vs 449</div>
        </div>
        <div>
          <span className="text-sm text-gray-500">Overall HPS</span>
          <div className="mt-1 text-lg">89k vs 92k</div>
        </div>
        <div>
          <span className="text-sm text-gray-500">Deaths</span>
          <div className="mt-1 text-lg">1 vs 0</div>
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
