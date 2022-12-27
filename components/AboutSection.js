import Image from "next/image";
import Link from "next/link";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import {
  Wrapper,
  AboutContent,
  AboutTitle,
  Paragraph,
  ImageWrapper,
} from "./styles/aboutSection.styled";
const index = () => {
  return (
    <Wrapper>
      <AboutContent>
        {/* <AboutTitle>About Elsa</AboutTitle> */}
        <Paragraph>
          Im currently working as a freelance web developer while building up my
          own side projects.I like to keep multiple hobbies and small business
          projects, and have created websites to keep track of my progress.
        </Paragraph>
      </AboutContent>
      <ImageWrapper>
        <Image
          className="portfolio-img"
          src={PortfolioPic}
          alt="elsa hovey"
          layout="fill"
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default index;
