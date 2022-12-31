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
  @media only screen and (max-width: 1024px) {
  background: none;
  }
}
main {
  background: lightgray;

}
  html {
    scroll-behavior: smooth;
  }
  p{
    font-size: 17px;
    margin: 5px 0;
    // color: blue;

  }
  section {
    padding: 15px 50px;
    margin: 90px 20px;
    // background: green;
  }
  .title {
    padding: 10px 0;
    font-size: 30px;
    text-decoration: underline;
    // color: blue;
  }
`;

export default GlobalStyles;
