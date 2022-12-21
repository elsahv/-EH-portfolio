import Link from "next/link";
import Image from "next/image";
import {
  NavSection,
  Menu,
  MenuItems,
  Logo,
  NavLinks,
  AboutImgWrapper,
} from "./header.styled";
import JtPic from "../../public/images/joshuatreeabout.jpg";

const Header = () => {
  return (
    <>
      <NavSection>
        <Menu>
          <MenuItems>
            <Logo>
              <Link href="/">Elsa Hovey</Link>
            </Logo>
            <NavLinks>
              <Link href="/">Portfolio</Link> {/*about, resume*/}
              {/* <Link href="/mindmaps">Mindmaps</Link> */}
              <Link href="/contact">Contact</Link>
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
