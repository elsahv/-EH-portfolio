import styled from "styled-components";

export const Sq = styled.div`
  border: solid 1px #000;
  margin: 10px 0;
  // border-radius: 5px;
  height: 530px;
`;

export const ContentPadding = styled.div`
  // background: green;
  padding: 15px 10px;
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  .img {
    border-bottom: solid 1px #000;
    border-top: solid 1px #000;
    height: 300px;
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
  margin-bottom: 5px;
  @media only screen and (max-width: 531px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: 1px solid #000;
  font-size: 15px;
  margin-right: 10px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border-radius: 3px;
  a {
    text-decoration: none;
    color: #000;
    padding: 5px;
  }
  &:hover {
    background: #0892a5;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
