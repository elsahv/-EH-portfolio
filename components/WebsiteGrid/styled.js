import styled from "styled-components";

export const Wrapper = styled.div`
  // height: 100vh;
  // background: lightgray;
`;

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 30px 110px;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 40px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;

export const Grid = styled.div`
  // background: teal;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7em 5em;
  .overlay {
  }

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`;

export const ImgWrapper = styled.div`
  margin: 5px 0;
  border: 1px solid #000;
  &:hover {
    opacity: 0.7;
    transition: 1s;
  }

  @media only screen and (max-width: 834px) {
    padding-top: 60px;
  }

  @media only screen and (max-width: 400px) {
    width: 280px;
    height: 280px;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 32px;
  padding: 3px 0;
  margin-top: 10px;
  @media only screen and (max-width: 531px) {
    font-size: 17px;
  }
`;
