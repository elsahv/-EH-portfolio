import styled from "styled-components";

export const Spacing = styled.div`
  // background: teal;
  margin: 100px 0;
`;

export const Grid = styled.div`
  margin: 30px 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  // background: teal;
`;

export const Sq = styled.div`
  // background: pink;
`;

export const ImgWrapper = styled.div`
  // border: solid 2px #000;
  // background: pink;
  width: 50px;
  height: 50px;
  margin-right: 2px;
`;

export const Title = styled.h4`
  text-transform: capitalize;
`;
