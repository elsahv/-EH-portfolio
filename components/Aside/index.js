import Link from "next/link";
import Image from "next/image";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import Tools from "../Tools";
import { BsArrowRightCircleFill, BsArrowDownCircleFill } from "react-icons/bs";
import {
  AsideWrapper,
  AsideContainer,
  ImageWrapper,
  TimelineWrapper,
  TimelineDate,
  IntroContent,
  WebsiteCTA,
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
          <IntroContent>
            <WebsiteCTA>
              <p className="desktop">
                All of my featured website projects are listed here. Click on
                each image to view website!
                <BsArrowRightCircleFill
                  style={{
                    marginLeft: "5px",
                    marginTop: "5px",
                    color: "gray",
                  }}
                />
              </p>
              <p className="mobile">
                All of my featured website projects are listed below. Click on
                each image to view website!
                <BsArrowDownCircleFill
                  style={{ marginLeft: "5px", marginTop: "15px" }}
                />
              </p>
            </WebsiteCTA>
            <br />
            <p>
              I am always looking for opportunities to further my skills... and
              work with other like minded people in tech. If you would like to
              contact me, you can reach me <Link href="/#contact">here.</Link>
            </p>
          </IntroContent>
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
                  {"I'm"} based in Joshua Tree, CA. My days are spent working on
                  my websites, and freelance projects. I am also very interested
                  in working with other developers to gain team building
                  experience, and build up a network to bounce ideas off of.
                </p>
                <Tools />
                <p>
                  During the last few years, {"I've"} learned how to program
                  websites using javascript and javascript frameworks. {"I've"}{" "}
                  utilized resources such as: youtube developer tutorials,
                  Freecodecamp, The Odin Project and Geeks for Geeks.
                </p>
              </li>
              <li>
                <TimelineDate> 2008-2020:</TimelineDate>
                <p>
                  All of my work experience and studies had revolved around food
                  during this time. I worked in small restaurants, assisted
                  living kitchens, and learned how to cook.{" "}
                </p>

                <p>
                  In 2016, I graduated with a bachelors degree in Nutrition and
                  Food Science. From 2018-2020, I worked as a dietary manager,
                  and loved it until I desired a change. That was when I started
                  looking for more creative employment in web design and
                  progamming.
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
