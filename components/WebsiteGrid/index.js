import Link from "next/link";
import Image from "next/image";
import content from "./data";

export default function PkgRate({ title, description, madeWith, listItem2 }) {
  return (
    <div className="flex justify-center flex-col pt-1">
      <div className="grid 2xl:grid-cols-2 gap-y-10 gap-x-20 xl:grid-cols-1">
        {content.map((item, index) => (
          <div key={index}>
            <div className="">
              <h2 className="text-3xl pb-1 pl-1">{item.title}</h2>

              <div className="m-y-1 border border-black hover:contrast-50">
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
              <p className="mt-1 mb-5 p-1">{item.description}</p>

              <div>{item.madeWith}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
