import PlayerSelector from "./components/PlayerSelect";
import { FightSelect } from "./components/FightSelect";
import { QuickCompare } from "./components/QuickCompare";
import { SpellUsageSection } from "./components/SpellUsageSection";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const fetchData = async () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query {
          characters(page: 2, filter: { name: "rick" }) {
            info {
              count
            }
            results {
              name
            }
          }
          location(id: 1) {
            id
          }
          episodesByIds(ids: [1, 2]) {
            id
          }
        }
      `,
    })
    .then((result) => console.log(result));
};

export default async function Page() {
  await fetchData();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 pb-8">
        <div className="sticky z-40 bg-gray-50 pb-2 pt-4">
          <PlayerSelector />
          <div className="mt-4">
            <FightSelect />
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <QuickCompare />
          <SpellUsageSection />
        </div>
      </main>
    </div>
  );
}
