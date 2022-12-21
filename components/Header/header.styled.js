import styled from "styled-components";

export const NavSection = styled.nav`
  overflow: hidden;
  width: 500px;
  height: 100%;
  position: fixed;
  left: 0;
  border-right: solid 1px teal;
  background-color: #3aa1aa;
  z-index: 1000;
  text-decoration: none;

  @media only screen and (max-width: 1024px) {
    width: 450px;
  }
  @media only screen and (max-width: 834px) {
    width: 350px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 834px) {
    padding-left: 0px;
  }
`;

export const MenuItems = styled.div`
  padding-left: 15px;
  padding-top: 50px;
`;

export const Logo = styled.h1`
  font-size: 32px;
  // background: green;
  a {
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
  }

  @media only screen and (max-width: 1024px) {
    padding-top: 10px;
  }

  @media only screen and (max-width: 834px) {
    font-size: 30px;
  }
`;

export const NavLinks = styled.li`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  padding-top: 5px;
  padding-left: 5px;
  a {
    margin: 1px 0;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 1px rgb(0, 123, 165);

    &:hover {
      // color: aquamarine;
      transition: 1s;
      text-shadow: 1px 1px 1px #000;
    }
  }
`;

export const AboutImgWrapper = styled.div`
  width: 670px;
  grid-area: ls;
  border-right: solid 2px black;
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
`;
