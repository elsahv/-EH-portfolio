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
import JtPic from "../public/images/joshuatreeabout.jpg";

const Header = () => {
  return (
    <>
      <NavSection>
        <Menu>
          <MenuItems>
            <Logo>Elsa Hovey</Logo>
            <NavLinks>
              <Link href="/#portfolio">Portfolio</Link> {/*about, resume*/}
              <Link href="/#contact">Contact</Link>
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
