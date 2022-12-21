import Image from "next/image";
import Link from "next/link";
import PortfolioPic from "../../public/images/portfolio-pic.jpg";
import {
  Wrapper,
  Grid,
  ImageWrapper,
  AboutContent,
  AboutTitle,
  Paragraph,
} from "./about.styled";

const about = () => {
  return (
    <>
      <div id="about">
        <Wrapper>
          <Grid>
            <ImageWrapper>
              <Image
                className="portfolio-img"
                src={PortfolioPic}
                alt="elsa hovey"
                layout="responsive"
              />
            </ImageWrapper>
            <AboutContent>
              <AboutTitle>About Elsa</AboutTitle>
              <Paragraph>
                - Im currently working as a freelance web developer while
                building up my
                <Link href="/">own side projects.</Link>I like to keep multiple
                hobbies and small business projects, and have created websites
                to keep track of my progress.
              </Paragraph>
              <br />
              <Paragraph>
                - My curiosity is what keeps me going, along with the desire to
                help other people with their endeavors.
              </Paragraph>
            </AboutContent>
          </Grid>
        </Wrapper>
      </div>
    </>
  );
};

export default about;
