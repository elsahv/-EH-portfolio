import Link from "next/link";
import Image from "next/image";
import { Header, Logo, Nav, NavMenu, SmIcons } from "./styles/header.styled";
import { Flex } from "./styles/flex.styled";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import JtPic from "../public/images/joshuatreeabout.jpg";

const HeaderSection = () => {
  return (
    <>
      <Header>
        <Logo>Elsa Hovey</Logo>
        <Nav>
          <NavMenu>
            <Link href="/#services">services</Link>
            <Link href="/#work">work</Link>
            <Link href="/#contact">contact</Link>

            <a href="https://google.com">
              <AiOutlineMail />
            </a>
            <a href="https://linkedin.com">
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com">
              <AiOutlineInstagram />
            </a>
          </NavMenu>
        </Nav>
      </Header>
    </>
  );
};

export default HeaderSection;
