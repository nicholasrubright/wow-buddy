export default function PlayerSelector() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-sm font-medium text-gray-500">Player 1</h2>
        <div className="mt-2">
          <select className="select select-primary w-full max-w-xs">
            <option disabled defaultValue={1}>
              Player 1
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      <div className="rounded-lg bg-white p-4 shadow">
        <h2 className="text-sm font-medium text-gray-500">Player 1</h2>
        <div className="mt-2">
          <select className="select select-secondary w-full max-w-xs">
            <option disabled defaultValue={1}>
              Player 1
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
    </div>
  );
}
