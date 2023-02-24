import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  // background: #0892a5;
  background: #fff;
  position: relative;
  top: 0;
  z-index: 1000;
  border-bottom: solid 2px #000;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Logo = styled.h1`
  padding-top: 10px;
  padding-left: 10px;
  font-size: 32px;
  a {
    color: #000;
    text-decoration: none;
  }
  @media only screen and (max-width: 599px) {
    font-size: 25px;
  }
`;

export const Nav = styled.nav``;
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 15px;
  font-size: 30px;
  cursor: pointer;

  a {
    margin: 0 5px;
    color: #000;
    text-decoration: none;
    &:hover {
      color: teal;
      transition: 1s;
    }
  }
`;
