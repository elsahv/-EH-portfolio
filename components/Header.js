"use client";

import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

const HeaderSection = () => {
  return (
    <>
      <header className="w-full bg-seasalt relative border border-b-2 border-black flex justify-between p-y-2 pl-3  ">
        <div className="font-bold py-3 text-3xl">
          <Link href="/">Elsa Hovey</Link>
        </div>
        <nav className="m-1 pr-1">
          <div className="flex list-none pt-1 text-4xl cursor-pointer">
            <Link className="" href="/#contact">
              <AiOutlineMail />
            </Link>
            <Link href="https://www.linkedin.com/in/elsa-hovey/">
              <AiFillLinkedin />
            </Link>
            <Link href="https://github.com/elsahv">
              <AiOutlineGithub />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderSection;
