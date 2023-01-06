import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: green;
  // padding-left: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "a a"
    "b c";
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
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
  padding: 5px 0 10px;
  border-bottom: 1px solid #000;
`;
const LeftSide = styled.div`
  grid-area: b;
`;
const RightSide = styled.div`
  grid-area: c;
  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  text-decoration: underline;
  @media only screen and (max-width: 1024px) {
    text-decoration: underline;
  }
`;

const Sq = styled.div`
  // background: green;
  padding: 5px;
  li {
    padding: 3px 0;
    list-style: none;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Description>
        Ive been studying javascript/ web design, and building projects to learn
        along the way. I am currently building two different online communites,
        one catered towards Registered Dietians/Nutritionists, and the other for
        creatives and content writers.
      </Description>
      <LeftSide>
        <Sq>
          <Title>Programming Languages: </Title>
          <li>Javascript</li>
          <li>PHP</li>
        </Sq>
        <Sq>
          <Title style={{ marginTop: "15px" }}>Libraries & Frameworks:</Title>
          <li>React</li>
          <li>NextJS</li>
          <li>Node</li>
          <li>Styled-Components</li>
          <li>Bootstrap</li>
          <li>SASS</li>
        </Sq>
      </LeftSide>
      <RightSide>
        <Sq>
          <Title>Tools & Databases:</Title>
          <ul>
            <li>Wordpress</li>
            <li>Sanity.io</li>
            <li>Git</li>
            <li>Mailchimp API</li>
          </ul>
        </Sq>
      </RightSide>
    </Wrapper>
  );
};

export default About;
