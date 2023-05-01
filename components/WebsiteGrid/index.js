import Link from "next/link";
import Image from "next/image";
import content from "./data";

export default function WebsiteGrid({
  title,
  description,
  madeWith,
  listItem2,
}) {
  return (
    <div className="flex justify-center flex-col 2xl:pt-5 px-4 lg:px-0 lg:justify-start bg-seasalt">
      <div className="pt-[30px] grid 2xl:grid-cols-2 sm:grid-cols-1 2xl:gap-y-10 gap-x-20 lg:gap-auto">
        {content.map((item, index) => (
          <div key={index}>
            <h2 className="text-3xl pb-1 pl-1 pt-[35px] 2xl:pt-0 sm:pt-[100px]">
              {item.title}
            </h2>

            <div className="m-y-1 border border-black drop-shadow-lg hover:contrast-50 transition duration-150ms delay-300ms">
              <a href={item.listItem2}>
                <Image
                  src={item.image}
                  className="img"
                  alt="about-me"
                  layout="responsive"
                  height="1100px"
                />
              </a>
            </div>
            <p className="mt-1 p-1 2xl:mb-[50px] lg:mb-[100px] md:mb-[100px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
