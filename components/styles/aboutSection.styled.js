import styled from "styled-components";

export const Wrapper = styled.div`
  // background: aquamarine;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "a b";
`;

export const AboutContent = styled.div`
  // background: coral;
  grid-area: a;
  opacity: 0.8;
  padding: 35px;
`;

export const AboutTitle = styled.h4`
  font-size: 30px;
`;
export const Paragraph = styled.p`
  font-size: 20px;
  // background: pink;
  padding: 5px 0;
`;

export const ImageWrapper = styled.div`
  grid-area: b;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  // padding: 12px 0;
  width: 310px;
  height: 430px;
  // border: solid 2px #000;

  .portfolio-img {
    // border-radius: 65px;
  }
  @media only screen and (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`;
