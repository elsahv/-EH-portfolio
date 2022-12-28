import React from "react";
import Skills from "./Skills";
import Timeline from "./Timeline";
import styled from "styled-components";

const AboutGrid = styled.div`
  padding: 50px 5x;
  //   background: green;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "a a"
    "b c";
`;

const Description = styled.p`
  grid-area: a;
  padding: 5px 50px;
  border-bottom: solid 1px #000;
`;
const TimelineWrapper = styled.div`
  grid-area: b;
  padding-left: 55px;
`;
const SkillsWrapper = styled.div`
  grid-area: c;
  padding-left: 115px;
  padding-top: 20px;
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
