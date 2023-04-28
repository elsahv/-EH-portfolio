import Image from "next/image";

import content from "./data";
import { RiComputerLine } from "react-icons/ri";

const Tools = () => {
  return (
    <>
      <div className="mt-[50px] py-5">
        <h3>
          <RiComputerLine style={{ marginRight: "10px" }} />
          Tech/ Skillset:
        </h3>
        <div className="grid grid-cols-4 gap-1">
          {content.map((item, index) => (
            <div key={index}>
              <h4>{item.tech}</h4>
              <div className="w-[55px]">
                <Image src={item.image} alt="about-me" layout="responsive" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tools;
