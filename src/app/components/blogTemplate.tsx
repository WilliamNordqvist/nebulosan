type Props = {
  date: string;
  title: string;
  img: string;
  children: React.ReactNode;
};

export const BlogTemplate = ({ date, title, img, children }: Props) => (
  <div className="pb-10">
    <div className="text-center pt-16">
      <p className="text-sm md:text-base text-gray-500 font-bold">{date}</p>
      <h1 className="font-bold break-normal  text-5xl sm:text-3xl">{title}</h1>
    </div>

    <div
      className="h-[75vh] w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded-md bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>

    <div className="container max-w-5xl mx-auto -mt-32 ">
      <div className="mx-0 sm:mx-6">
        <div className="bg-white w-full p-11 text-lg text-gray-800 leading-normal rounded-md *:py-6 sm:text-base sm:p-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);
