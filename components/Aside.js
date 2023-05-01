import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import Tools from "./Tools";

const Aside = () => {
  return (
    <>
      <div className="bg-seasalt border-r-2 border-b-2 border-black">
        <div className="pt-[40px] p-5 flex 2xl:flex-col lg:flex-row md:flex-row sm:flex flex-col">
          <p className="p-2 2xl:w-full lg:w-1/2 2xl:pt-0 lg:pt-[65px] md:pt-[50px] pr-5 sm:pt-[20px]">
            Hi there, {"I'm"} Elsa.I am always looking for opportunities to
            further my skills... and work with other like minded people in tech.
            If you would like to contact me, you can reach me here
          </p>
          {/* //*SELF IMAGE*/}
          <div className="relative pl-1 my-3 pt-5 2xl:pr-[80px] lg:pr-[50px] 2xl:w-full lg:w-1/2">
            <Image src={PortfolioPic} alt="elsa hovey" />
          </div>
        </div>
        <div className="flex justify-center flex-col p-5 border-t-2 border-black">
          <div>
            <ul>
              <li>
                <h2 className="text-2xl font-bold pb-5">
                  A little bit about me...
                </h2>
                <div className="font-bold"> 2020-2023:</div>
                <p>
                  {"I'm"} based in Joshua Tree, CA. My days are spent working on
                  my websites, and freelance projects. I am also very interested
                  in working with other developers to gain team building
                  experience, and build up a network to bounce ideas off of.
                </p>
                <Tools />
                <p>
                  During the last few years, {"I've"} learned how to program
                  websites using javascript and javascript frameworks. {"I've"}{" "}
                  utilized resources such as: youtube developer tutorials,
                  Freecodecamp, The Odin Project and Geeks for Geeks.
                </p>
              </li>
              <li>
                <div className="mt-[50px] font-bold"> 2008-2020:</div>
                <p>
                  All of my work experience and studies had revolved around food
                  during this time. I worked in small restaurants, assisted
                  living kitchens, and learned how to cook.{" "}
                </p>

                <p>
                  In 2016, I graduated with a bachelors degree in Nutrition and
                  Food Science. From 2018-2020, I worked as a dietary manager,
                  and loved it until I desired a change. That was when I started
                  looking for more creative employment in web design and
                  progamming.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
