import Link from "next/link";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-[5rem]">
          WoW Buddy
        </h1>
        <div className="flex flex-row gap-5">
          <label className="input input-bordered flex w-full items-center gap-2">
            <Search />
            <input
              type="text"
              className="grow"
              placeholder="Warcraft log url"
            />
          </label>
          <button type="submit" className="btn btn-accent">
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
