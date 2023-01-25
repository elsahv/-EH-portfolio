import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import styled from "styled-components";

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
    padding: 2px;
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
    // padding-left: 30px;
    // padding-top: 30px;
    border-bottom: none;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    // padding: 30px 20px;
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
    margin-right: 20px;
  }
  @media only screen and (max-width: 834px) {
    // width: 200px;
  }
`;

const TimelineWrapper = styled.div`
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

const TimelineDate = styled.div`
  font-weight: bold;
`;

const Aside = () => {
  return (
    <>
      <AsideWrapper>
        <AsideContainer>
          <p>Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.</p>
          <ImageWrapper>
            <Image src={PortfolioPic} alt="elsa hovey" layout="responsive" />
          </ImageWrapper>
        </AsideContainer>

        <AsideContainer style={{ borderTop: "solid 2px #000" }}>
          <TimelineWrapper>
            <ul>
              <li>
                <h2 style={{ paddingBottom: "10px" }}>
                  A little bit about me...
                </h2>
                <TimelineDate> 2020-2022:</TimelineDate>
                <p>
                  Taught myself programming and web design through various (and
                  super helpful!) youtube developers. Also utilized other
                  resources such as: freecodecamp, the odin project, geeks for
                  geeks.
                </p>
                <p>Spent this time building my featured projects</p>
              </li>
              <li>
                <TimelineDate> 2016-2020:</TimelineDate>
                <p>
                  Worked in restaurants and assisted living kitchens. Worked as
                  a Dietary Manager from 2018-2020.... loved it until I desired
                  a change, mainly for finding more creative employment. Became
                  interested with programming and started building my skills.
                </p>
              </li>
              <li>
                <TimelineDate>2016</TimelineDate>
                <p>
                  Completed Bachelors of Science in Nutrition and Food Science,
                  Cal State San Bernardino
                </p>
              </li>
            </ul>
          </TimelineWrapper>
        </AsideContainer>
      </AsideWrapper>
    </>
  );
};

export default Aside;
