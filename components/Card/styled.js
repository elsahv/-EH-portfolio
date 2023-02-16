import styled from "styled-components";

export const Sq = styled.div`
  border: solid 1px #000;
  margin: 10px 0;
  // border-radius: 5px;
  // background: teal;
`;

export const WebsiteTags = styled.div`
  //   padding: 12px 10px;
  //   @media only screen and (max-width: 531px) {
  //   }
  //
`;

export const Sq2 = styled.div`
  // background: green;
  padding: 15px 10px;
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  .img {
    border-bottom: solid 1px #000;
    border-top: solid 1px #000;
  }
  &:hover {
    opacity: 0.8;
    transition: 1s;
  }
`;

export const WebsiteTitle = styled.h3`
  font-size: 20px;
  // padding: 10px;
  @media only screen and (max-width: 531px) {
  }
`;

export const WebsiteDescription = styled.p`
  // font-style: italic;
  padding: 5px 2px;
  @media only screen and (max-width: 531px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // background: blue;
  margin: 25px 0 0 5px 10px;
  width: 46%;
  @media only screen and (max-width: 1024px) {
    width: 41%;
  }
  @media only screen and (max-width: 834px) {
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    width: 82%;
  }
`;

export const Button = styled.button`
  // background: #0892a5;
  border: 1px solid #000;
  width: 130px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border-radius: 3px;
  a {
    text-decoration: none;
    color: #000;
    // background: aquamarine;
    // text-shadow: 1px 1px 1px #000;
    padding: 5px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
