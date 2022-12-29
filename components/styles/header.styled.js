import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: solid 2px #000;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 32px;
  // background: green;
  color: #000;
  // text-shadow: 1px 1px 1px #000;

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
    font-size: 55px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 40px;
  }
`;

export const Nav = styled.nav``;
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 15px;
  font-size: 30px;

  a {
    margin: 0 5px;
    color: #000;
  }
`;
export const SmIcons = styled.div`
  font-size: 30px;
  display: flex;
  padding-top: 5px;
  padding-left: 5px;
  a {
    color: #000;
    margin: 0 3px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 40px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  padding-top: 405px;
  @media only screen and (max-width: 1024px) {
    padding-top: 785px;
  }
  @media only screen and (max-width: 834px) {
    padding-top: 575px;
  }
  @media only screen and (max-width: 810px) {
    padding-top: 395px;
  }
  @media only screen and (max-width: 800px) {
    padding-top: 595px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const MobileIntro = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
