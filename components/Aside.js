import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import styled from "styled-components";
import Timeline from "./Timeline";

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

export const BlogBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px 25px;
  color: #000;
  a {
    color: #000;
    padding: 2px;
  }
  p {
    margin: 10px 2px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 30px 35px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
    padding-top: 30px;
    border-bottom: none;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding: 30px 20px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
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
    margin: 0;
  }
  @media only screen and (max-width: 834px) {
    width: 200px;
  }
`;

const Aside = () => {
  return (
    <>
      <AsideWrapper>
        <BlogBanner>
          <p>Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.</p>
          <ImageWrapper>
            <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
          </ImageWrapper>
        </BlogBanner>

        <BlogBanner style={{ borderTop: "solid 2px #000" }}>
          <Timeline />
        </BlogBanner>
      </AsideWrapper>
    </>
  );
};

export default Aside;
