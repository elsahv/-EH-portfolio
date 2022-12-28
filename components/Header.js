import Link from "next/link";
import Image from "next/image";
import {
  NavSection,
  Menu,
  MenuItems,
  Logo,
  NavLinks,
  AboutImgWrapper,
} from "./styles/header.styled";
import { Flex } from "./styles/flex.styled";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import JtPic from "../public/images/joshuatreeabout.jpg";

const Header = () => {
  return (
    <>
      <NavSection>
        <Menu>
          <MenuItems>
            <Logo>Elsa Hovey</Logo>
            <p>
              Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.
            </p>
            <NavLinks>
              <Flex>
                <Link href="">
                  <AiOutlineMail />
                </Link>
                <Link href="">
                  <AiFillLinkedin />
                </Link>
                <Link href="">
                  <AiOutlineInstagram />
                </Link>
              </Flex>
            </NavLinks>
          </MenuItems>
          <AboutImgWrapper>
            <Image
              className="portfolio-img"
              src={JtPic}
              alt="elsa hovey"
              layout="responsive"
            />
          </AboutImgWrapper>
        </Menu>
      </NavSection>
    </>
  );
};

export default Header;
