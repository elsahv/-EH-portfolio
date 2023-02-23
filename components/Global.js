import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: cormorant-garamond;
    scroll-behavior: smooth;
    font-family: 'Cormorant Garamond', serif;

  }
 
main {
  background: lightgray;
 
}
  html {
    scroll-behavior: smooth;
  }
  p{
    font-size: 17px;
    line-height: 1.5;
    // color: red;
    opacity: 0.9;
    @media only screen and (max-width: 1024px) {
      margin: 1px 0 5px 0;

    }
  }
 
  section {
    padding: 15px 50px;
    margin: 40px;
  @media only screen and (max-width: 1024px) {
  padding: 0;
  margin: 0px;
  }
  }
  .title {
    font-size: 32px;
    // text-decoration: underline;
    padding-top: 100px;
    // color: blue;
  @media only screen and (max-width: 1024px) {
  padding: 0 0 0 5px;
    font-size: 27px;

  }
  }
  .section-spacing {
    @media only screen and (max-width: 1024px) {
      padding-top: 65px;
      }
  }

`;

export default GlobalStyles;
