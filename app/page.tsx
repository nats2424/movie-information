import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-5xl">
        <h1>今日、何観る？</h1>
      </div>

      <div>
        <ul>
          <li>映画ジャンル1</li>
          <li>映画ジャンル2</li>
          <li>映画ジャンル3</li>
        </ul>
      </div>

      <div>
        <section>
          <img></img>
          <p>映画1</p>
        </section>

        <section>
          <img></img>
          <p>映画2</p>
        </section>
      </div>
    </main>
  );
}
