import styled from "styled-components";

export const PortfolioGrid = styled.div`
  opacity: 0.9;
  padding: 70px 40px;
  // background: pink;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    padding: 30px 10px;
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 834px) {
    padding: 30px 30px;
  }
`;
