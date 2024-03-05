import React, { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

function PublishedMovieList() {
  const [list, setList] = useState<string | null>(null);
  const MovieList = useFetchData();

  return (
    <div>
      <div>
        <p className="text-3xl py-5 pl-5">公開中作品</p>
      </div>
      <div className="flex space-x-10 pl-5">
        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>
      </div>

      <div>
        <p className="text-3xl py-5 pl-5">近日公開作品</p>
      </div>
      <div className="flex space-x-10 pl-5">
        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>

        <section className="w-1/5">
          <img src="/sample.webp" className="w-52"></img>
        </section>
      </div>
    </div>
  );
}

export default PublishedMovieList;
