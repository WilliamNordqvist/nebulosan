import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import { getPost } from "@/app/getPost";
import path from "path";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/app/blogArticles"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export default function Post({ params: { id } }: { params: { id: string } }) {
  const { frontMatter, content } = getPost({ slug: id });

  return (
    <div className="pb-10">
      <div className="text-center pt-16">
        <p className="text-sm md:text-base text-gray-500 font-bold">
          {frontMatter.date}
        </p>
        <h1 className="font-bold break-normal  text-5xl sm:text-3xl">
          {frontMatter.title}
        </h1>
      </div>

      <div
        className="h-[75vh] w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded-md "
        style={{
          backgroundImage: `url('${frontMatter.img}')`,
        }}
      ></div>

      <div className="container max-w-5xl mx-auto -mt-32 ">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal rounded-md *:py-6">
            <MDXRemote source={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
