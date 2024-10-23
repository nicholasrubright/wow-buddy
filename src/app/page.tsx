import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          WoW Buddy
        </h1>
        <div className="flex flex-row">
          <input
            type="url"
            placeholder="Paste your warcraft log url..."
            className="Input w-full rounded border p-2"
          />
          <button type="submit" className="rounded">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
