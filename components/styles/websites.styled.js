import styled from "styled-components";

export const PortfolioGrid = styled.div`
  opacity: 0.9;
  padding: 10px 30px;
  // background: pink;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media only screen and (max-width: 1024px) {
    padding: 20px 30px 0 0;
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  @media only screen and (max-width: 834px) {
    padding: auto;
  }
`;

export const Sq = styled.div`
  background: #fff;
  padding: 40px 20px;
  border: solid 2px black;
  font-size: 18px;
  &:hover {
    // background: teal;
    transition: 1s;
  }
`;

export const Button = styled.button`
  background: aquamarine;
  border: 1px solid teal;
  padding: 0px 10px 1px;
  font-size: 18px;
  display: flex;
  margin: 15px 5px 5px;
  border: solid 1px #000;
  a {
    text-decoration: none;
    color: #000;
    padding: 5px;
  }
`;

export const WebsiteTitle = styled.h3`
  padding-bottom: 5px;
  font-size: 22px;

  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const WebsiteDescription = styled.p`
  @media only screen and (max-width: 531px) {
  }
`;

export const WebsiteTag = styled.div`
  @media only screen and (max-width: 531px) {
  }
`;
