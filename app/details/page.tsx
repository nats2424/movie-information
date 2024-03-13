"use client";

import PublishedMovieList from "../components/PublishedMovieList";
import Sidebar from "../components/Sidebar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Header from "../components/header";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-indigo-950 min-h-screen min-w-full">
        <Header />

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
