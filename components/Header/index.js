import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { NavSection, Menu, MenuItems, Logo, NavLinks } from "./header.styled";

const Header = () => {
  return (
    <>
      <NavSection>
        <Menu>
          <FaBars />
          <MenuItems>
            <Logo>
              <Link href="/">Elsa Hovey</Link>
            </Logo>

            <NavLinks>
              <Link href="/#portfolio">Portfolio</Link> {/*about, resume*/}
              <Link href="/#services">Mindmaps</Link>
              <Link href="/contact/#about">Contact</Link>
            </NavLinks>
          </MenuItems>
        </Menu>
      </NavSection>
    </>
  );
};

export default Header;
