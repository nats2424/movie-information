import { QueryKey, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
let Tmdb: string;

if (typeof process.env.NEXT_PUBLIC_TMDBURL === "string") {
  Tmdb = process.env.NEXT_PUBLIC_TMDBURL;
} else {
  throw new Error("NEXT_PUBLIC_TMDBURL is not defined");
}

type FetchData = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const useFetchData = () => {
  const queryKey: QueryKey = ["repoData"];

  const { isLoading, error, data } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch(Tmdb, { method: "GET" });
      const data: FetchData = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (isLoading) {
        return <div>Loading....</div>;
      }
      if (error) {
        return <div>エラーが発生しました</div>;
      }
      return data;
    },
  });

  return { data, isLoading, error };
};
