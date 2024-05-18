import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  title: string;
  text: string;
  href: string;
};

export const BlogCard = ({ img, title, text, href }: Props) => {
  return (
    <div className="h-auto min-h-[600px] flex justify-between max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
      <div>
        <div className="relative h-[260px] mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <Image
            className="w-full"
            priority
            src={img}
            alt={"card image " + title}
            fill
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>

        <div className="p-6">
          <div className="mb-3">
            <h5 className="text-xl font-medium text-blue-gray-900">{title}</h5>
          </div>
          <p className="text-base font-light leading-relaxed text-gray-700">
            {text}
          </p>
        </div>
      </div>
      <div className="p-6 pt-3">
        <Link
          href={href}
          className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Läs mer
        </Link>
      </div>
    </div>
  );
};
