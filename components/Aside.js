import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import styled from "styled-components";

export const AsideWrapper = styled.div`
  grid-area: ls;
  background: #fff;
  border-right: solid 2px black;
  border-bottom: solid 2px black;
  width: 400px;

  @media only screen and (max-width: 834px) {
    width: 100%;
    // padding: 50px;
  }
`;

export const BlogBanner = styled.div`
  font-size: 17px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 0;
  font-size: 20px;
  padding: 60px 30px;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  background: #fff;
  border-bottom: solid 2px black;

  @media only screen and (max-width: 834px) {
    padding: 30px 10px;
    // border: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
    padding-top: 30px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding: 30px 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  grid-area: left;
  // height: 500px;
  // border: solid 2px #000;

  @media only screen and (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`;

const Aside = () => {
  return (
    <>
      <AsideWrapper>
        <BlogBanner>
          <p>Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.</p>
          <ImageWrapper>
            <Image
              src={PortfolioPic}
              alt="elsa hovey"
              // width="440px"
              // height="600px"
              layout="responsive"
              style={{ position: "absolute" }}
            />
          </ImageWrapper>
        </BlogBanner>
        <BlogBanner>
          <p>
            I currently run two design studios: one catered to:
            <Link a href="https://writingtobetterhealth.com">
              registered dietitian nutritionists
            </Link>
            , and the other for:
            <Link href="/">small business owners and creatives.</Link>
          </p>
          <p>you can see all of my featured works here</p>
        </BlogBanner>
        {/* <ImageWrapper>
          <Image
            src={PortfolioPic}
            alt="elsa hovey"
            // width="440px"
            // height="600px"
            layout="responsive"
            style={{ position: "absolute" }}
          />
        </ImageWrapper> */}
      </AsideWrapper>
    </>
  );
};

export default Aside;
