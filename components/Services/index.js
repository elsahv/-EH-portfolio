import React from "react";
import Skills from "./Skills";
import Timeline from "./Timeline";
import styled from "styled-components";

const AboutGrid = styled.div`
  padding: 15px 50px;
  // background: green;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "a a"
    "b c";

  @media only screen and (max-width: 1024px) {
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a a"
      "b b"
      "c c";
  }
  @media only screen and (max-width: 600px) {
    border-bottom: 1px solid #000;
  }
`;

const Description = styled.p`
  grid-area: a;
  padding: 10px 0;
`;
const TimelineWrapper = styled.div`
  grid-area: b;
`;
const SkillsWrapper = styled.div`
  grid-area: c;
  padding-left: 115px;
  padding-top: 20px;

  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
    padding-top: 40px;
  }
`;

const About = () => {
  return (
    <AboutGrid>
      <Description>
        I currently work as a self-employed, indie web developer. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reiciendis, necessitatibus
        cupiditate, dolore exceptu
      </Description>
      <TimelineWrapper>
        <Timeline />
      </TimelineWrapper>
      <SkillsWrapper>
        <Skills />
      </SkillsWrapper>
    </AboutGrid>
  );
};

export default About;
