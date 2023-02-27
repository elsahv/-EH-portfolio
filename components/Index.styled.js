import styled from "styled-components";

export const IndexGrid = styled.div`
  display: grid;
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const IndexContainer = styled.div`
  background: #fff;
  // opacity: 0.9;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;
  @media only screen and (max-width: 1024px) {
  padding: 20px 10px 0px 20px;
  // padding-right: 50px;
  }
  }

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-bottom: none;
    padding: 50px 0 0 7px;
  }
  a {
    color: #000;
  }
`;

export const WebsitesGrid = styled.div`
  opacity: 0.9;
  // background: teal;
  // padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;

  @media only screen and (max-width: 1024px) {
    padding: 20px 30px 0 0;
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  @media only screen and (max-width: 834px) {
    padding: auto;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px;
    grid-gap: 3em;
  }
`;

export const IntroContent = styled.div`
  padding: 5px 0 30px;
  @media only screen and (max-width: 1024px) {
    padding: 20px 10px 30px;
  }
`;
