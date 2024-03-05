import PublishedMovieList from "./components/PublishedMovieList";
import Sidebar from "./components/Sidebar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-indigo-950 min-h-screen min-w-full">
        <div className="text-5xl py-10 pl-5 border-b border-white">
          <h1>今日、何観る？</h1>
        </div>

        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div>
            <PublishedMovieList />
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
