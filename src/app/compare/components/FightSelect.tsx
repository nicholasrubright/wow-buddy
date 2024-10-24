export function FightSelect() {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <select className="select select-bordered w-full max-w-full">
        <option disabled defaultValue={1}>
          Select the fight
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
}
