import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Header, Logo, Nav, NavMenu } from "./styled";

const HeaderSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Header>
          <Logo>Elsa Hovey</Logo>
          <Nav>
            <NavMenu>
              <Link href="/#contact">
                <AiOutlineMail />
              </Link>
              <a href="https://www.linkedin.com/in/elsa-hovey/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/elsahv">
                <AiOutlineGithub />
              </a>
            </NavMenu>
          </Nav>
        </Header>
      </motion.div>
    </>
  );
};

export default HeaderSection;
