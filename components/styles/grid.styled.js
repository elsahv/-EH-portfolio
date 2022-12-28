import styled from "styled-components";

export const Grid = styled.div`
  // border: solid 2px #000;
  margin: 5px 25px;
  // background: teal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      " right";
  }
`;

export const LeftSide = styled.div`
  grid-area: left;
  // border-right: solid 1px #000;
  // background: coral;
`;
export const RightSide = styled.div`
  grid-area: right;
  // border-left: solid 1px #000;
  // background: teal;
`;
