import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', serif;
    scroll-behavior: smooth;
  }
body {
  background: lightgray;
  @media only screen and (max-width: 1024px) {
  background: none;
  }
}
  html {
    scroll-behavior: smooth;
  }
  p{
    font-size: 17px;
    // color: blue;
  }

`;

export default GlobalStyles;
