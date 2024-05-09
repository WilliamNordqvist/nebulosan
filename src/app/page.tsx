import { BlogCard } from "./components/blogCard";
import Image from "next/image";
import fs from "fs";
import { getPost } from "./getPost";
import path from "path";

export default function Home() {
  const posts = fs
    .readdirSync(path.join("src/app/blogArticles"))
    .map((slug) => {
      const post = getPost({ slug: slug.replace(".mdx", "") });
      return {
        title: post.frontMatter.title,
        description: post.frontMatter.description,
        date: post.frontMatter.date,
        img: post.frontMatter.img,
        slug: "/blog/" + slug.replace(".mdx", ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="h-full *:p-10 *:sm:p-2">
      <section className="h-full">
        <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl sm:rounded-lg">
          <Image
            className="w-full h-full object-cover"
            src="/stockholm.jpeg"
            alt="hero image stockholm"
            priority
            fill
          />
          <div className="absolute top-0 h-full w-full bg-black/30 p-14 text-white flex items-end sm:items-center sm:p-5 ">
            <div
              style={{
                textShadow:
                  "rgb(0, 0, 0) 2px 2px 8px, rgba(0, 0, 0, 0.9) 1px 1px 1px",
              }}
              className="flex flex-col sm:text-center"
            >
              <h1 className="text-5xl mb-2 sm:text-3xl">BRF NEBOLUSAN 9</h1>
              <p className="w-2/3 sm:w-full">
                Välkommen till BRF Nebolusan 9. Här finner du allt du behöver
                veta om vår förening – från viktig information till styrelsens
                kontaktuppgifter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto min-h-full flex flex-col ">
        <h2 className="my-10 ml-5 font-bold text-gray-900 text-5xl text-center">
          Aktuellt
        </h2>
        <div className="h-auto grow flex justify-center items-center flex-wrap mb-16 sm:mb-0 *:mx-5 *:mb-8 *:sm:mx-0">
          <BlogCard
            title="Viktiga Dokument"
            text="Här har vi samlat allt
            material som är relevant för dig som medlem i vår förening. Vi strävar
            efter att hålla denna sida uppdaterad med den senaste informationen för
            att du enkelt ska kunna ta del av den när du behöver. Tveka inte att
            kontakta styrelsen om du har några frågor eller om du behöver hjälp med
            att hitta ett specifikt dokument."
            img="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            href="/dokument"
          />
        </div>
      </section>

      <div>
        <footer className="flex justify-between items-center flex-col h-auto bg-gray-900 rounded-lg p-8 text-slate-100 sm:text-sm">
          <div className="text-center">
            <p className="mb-4 text-xl">BRF Nebulosan 9 Styrelsemedlemmar</p>
            <p>Susann Elisabeth Hillbäck: Ordinarie ledamot,ordförande</p>
            <p>Bror Pelle Gustav Mellin: Ordinarie ledamot</p>
            <p>Karl Pehr Sandstedt: Ordinarie ledamot</p>
            <p>Magnus Peter Uno Hallman: Ordinarie ledamot</p>
            <p>Ulf Magnus Göransson: Ordinarie ledamot</p>
            <p className="mb-3">William Niclas Nordqvist: Ordinarie ledamot</p>

            <p>
              <a href="mailto:nebulosan9@hotmail.com">
                Kontakt: nebulosan9@hotmail.com
              </a>
            </p>
          </div>
          <p>Västmannagatan 49, 11325 stockholm</p>
        </footer>
      </div>
    </div>
  );
}
