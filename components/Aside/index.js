import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import {
  AsideWrapper,
  AsideContainer,
  ImageWrapper,
  TimelineWrapper,
  TimelineDate,
} from "./styled";

const Aside = () => {
  return (
    <>
      <AsideWrapper>
        <AsideContainer>
          <p style={{ fontSize: "18px" }}>
            Hi there, {"I'm"} Elsa. I build websites for
            <a href="https://writingtobetterhealth.com">dietitians</a>
            and
            <a href="https://laughingcoyote.dev">small business owners.</a>
          </p>

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
                <TimelineDate> 2020-2023:</TimelineDate>
                <p>
                  {/* {"I'm"} a web developer based in Joshua Tree, CA. */}
                  Taught myself programming and web design through various (and
                  super helpful!) youtube developers. Also utilized other
                  resources such as: freecodecamp, the odin project, geeks for
                  geeks.
                </p>
                <p>
                  Spent this time, and am currently building up my featured
                  projects
                </p>
              </li>
              <li>
                <TimelineDate> 2016-2020:</TimelineDate>
                <p>Worked in restaurants and assisted living kitchens.</p>
                <p>
                  Worked as a Dietary Manager from 2018-2020.... loved it until
                  I desired a change, mainly for finding more creative
                  employment.
                </p>
                <p>
                  In 2019, I became interested with programming and started
                  learning Javascript.
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
