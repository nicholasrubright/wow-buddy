export function PlayerSelect() {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="text-sm font-medium text-gray-500">Player 1</h2>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Enter player name..."
          className="w-full rounded border p-2"
        />
      </div>
    </div>
  );
}
