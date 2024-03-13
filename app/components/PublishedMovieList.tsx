import { useFetchData } from "../hooks/useFetchData";
import Link from "next/link";

function PublishedMovieList() {
  // useFetchDataを使用するためのもの。
  const { data, isLoading, error } = useFetchData();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Failed to load...</div>;
  }

  return (
    <div className="ml-40">
      <div>
        <p className="text-3xl py-5 pl-5">公開中作品</p>
      </div>
      <div className="flex space-x-10 pl-5">
        <section className="w-1/5">
          <Link href="details" key="details">
            <img src="/sample.webp" className="w-52"></img>
          </Link>
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
        {/* {data &&
          data.map((item) => (
            <section className="w-1/5" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              ></img>
            </section>
          ))} */}
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
