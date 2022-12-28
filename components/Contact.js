import Image from "next/image";
import PortfolioPic from "../public/images/portfolio-pic.jpg";
import styled from "styled-components";

export const Flex = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr;
  grid-template-areas: "left right";
  @media only screen and (max-width: 1024px) {
    grid-template-column: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 340px;
  grid-area: left;
  // height: 500px;
  // border: solid 2px #000;

  @media only screen and (max-width: 1024px) {
    width: 250px;
    height: 350px;
  }
`;

export const ContentWrapper = styled.div`
  grid-area: right;
  padding: 25px;

  @media only screen and (max-width: 1024px) {
  }
`;

const Contact = () => {
  return (
    <Flex>
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
      <ContentWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          exercitationem distinctio quis, mollitia harum quidem ab cupiditate
          temporibus laudantium aliquam vitae quibusdam? Iste vero corrupti
          sapiente ex quisquam! Reprehenderit, consequuntur.
        </p>
        <p>you can contact me devdesignsbyelsa@gmail.com</p>
      </ContentWrapper>
    </Flex>
  );
};

export default Contact;
