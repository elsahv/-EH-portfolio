import styled from "styled-components";

export const IntroContent = styled.div`
  padding: 5px 0 30px;
  @media only screen and (max-width: 1024px) {
    padding: 20px 10px 30px;
  }
`;

export const WebsiteCTA = styled.div`
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export const AsideWrapper = styled.div`
  grid-area: ls;
  background: #fff;
  border-right: solid 2px black;
  border-bottom: solid 2px black;

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-bottom: none;
    border-right: none;
  }
`;

export const AsideContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 25px;
  color: #000;
  a {
    color: #000;
    padding: 5px;
  }
  p {
    margin: 10px 2px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px 10px;
    font-size: 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;

    border-bottom: none;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  grid-area: left;
  border: solid 2px #000;
  margin-left: 15px;
  margin-top: 15px;

  @media only screen and (max-width: 1024px) {
    width: 210px;
    margin-right: 20px;
  }
  @media only screen and (max-width: 834px) {
    // width: 200px;
  }
`;

export const TimelineWrapper = styled.div`
  padding: 15px;
  // background: teal;
  h2 {
    @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  }
  li {
    margin: 15px 0;
    list-style: none;
  }
`;

export const TimelineDate = styled.div`
  font-weight: bold;
`;
//
