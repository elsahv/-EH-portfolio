import Link from "next/link";
import { NavSection, Menu, MenuItems, Logo, NavLinks } from "./header.styled";

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
              <Link href="/mindmaps">Mindmaps</Link>
              <Link href="/contact">Contact</Link>
            </NavLinks>
          </MenuItems>
        </Menu>
      </NavSection>
    </>
  );
};

export default Header;
