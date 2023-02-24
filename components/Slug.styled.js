import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  margin-left: 152px;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;
  border-right: solid 1px #000;
  // height: 100vh;

  @media only screen and (max-width: 1024px) {
    margin-left: 50px;
    margin-bottom: 0;
    height: 100vh;
  }

  @media only screen and (max-width: 834px) {
    margin-left: 50px;
    margin-bottom: 0;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const WebsiteTitle = styled.h2`
    font-size: 60px;
    padding-top: 25px;
    @media only screen and (max-width: 768px) {
     font-size: 45px; 
    }
    @media only screen and (max-width: 599px) {
      font-size: 30px; 
     }
  }
`;

export const WebsiteDescription = styled.p`
  font-size: 25px;
  padding: 20px 0;
  @media only screen and (max-width: 599px) {
    font-size: 20px;
  }
`;

export const ImgWrapper = styled.div`
  width: 900px;
  // height: 550px;
  border: 1px solid #000;
  @media only screen and (max-width: 834px) {
    width: 600px;
  }
  @media only screen and (max-width: 600px) {
    width: 450px;
  }
  @media only screen and (max-width: 599px) {
    width: 350px;
  }
`;

export const Padding = styled.div`
  padding: 50px 100px 50px 130px;
  width: 65%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 20px 40px 60px;
  }
  @media only screen and (max-width: 599px) {
    padding: 20px 10px 5px;
  }
`;
