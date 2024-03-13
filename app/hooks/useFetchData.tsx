// "use client";
import { QueryKey, useQuery } from "@tanstack/react-query";
// 取得したdataの型定義
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
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const fetchInformations = async (): Promise<FetchData[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=cfe5c0a677a38bcfd0f00a92852cf5fc"
  );
  const data: FetchData[] = await response.json(); // dataに型をつけて配列にする。
  return data;
};

export const useFetchData = () => {
  return useQuery({ queryKey: ["repoData"], queryFn: fetchInformations }); // queryKeyとqueryFnはReact-Queryに必須の引数
};
