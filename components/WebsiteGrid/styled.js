import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 50px;
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

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
`;

export const Sq = styled.div`
  h2 {
    font-size: 30px;
    padding: 3px 0;
    margin-top: 10px;
    @media only screen and (max-width: 531px) {
      font-size: 20px;
    }
  }
  &:hover {
    opacity: 0.8;
    transition: 1s;
    // background: #3aa1aa;
    // border: 1px solid #000;
    h2 {
      transition: 1s;
      color: #3aa1aa;
      text-shadow: 0px 0px 1px rgb(0, 123, 165);
    }
    p {
      transition: 1s;
      color: rgb(0, 123, 165);
    }
  }
`;

export const ImgWrapper = styled.div`
  margin: 5px 0;
  border: 1px solid #000;
  &:hover {
    border: 1px solid #3aa1aa;
  }
`;
