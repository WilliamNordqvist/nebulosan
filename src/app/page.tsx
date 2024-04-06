import { BlogCard } from "./components/blogCard";
import Image from "next/image";
import fs from "fs";
import { getPost } from "./getPost";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/app/blogArticles"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

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
        <h2 className="mb-10 ml-5 font-bold text-gray-900 text-5xl text-center">
          Nyheter
        </h2>
        <div className="h-auto grow flex justify-center items-center flex-wrap mb-16 sm:mb-0 *:mx-5 *:mb-8 *:sm:mx-0">
          {posts.map(({ slug, title, description, img }) => (
            <BlogCard
              key={slug}
              title={title}
              text={description}
              img={img}
              href={slug}
            />
          ))}
        </div>
      </section>

      <div>
        <footer className="flex justify-between items-center flex-col h-[400px] bg-gray-900 rounded-lg p-8 text-slate-100">
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
