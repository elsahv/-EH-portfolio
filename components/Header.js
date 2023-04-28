import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <header className="w-full bg-white relative border border-b-2 border-black flex justify-between p-y-2 pl-3  ">
          <div className="font-bold  py-3 text-3xl">
            <Link href="/">Elsa Hovey</Link>
          </div>
          <nav>
            <div className="flex list-none pt-1 text-4xl cursor-pointer">
              <Link className="" href="/#contact">
                <AiOutlineMail />
              </Link>
              <a href="https://www.linkedin.com/in/elsa-hovey/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/elsahv">
                <AiOutlineGithub />
              </a>
            </div>
          </nav>
        </header>
      </motion.div>
    </>
  );
};

export default HeaderSection;
