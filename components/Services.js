import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: green;
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
  padding: 5px 0;
  border-bottom: 1px solid #000;
`;
const ServicesContainer = styled.div`
  grid-area: b;
`;
const SkillsContainer = styled.div`
  grid-area: c;

  list-style: none;
  ul {
    list-style-type: none;
    li {
      margin: 5px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 0px;
    // padding-top: 40px;
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
  margin: 10px 0;
  li {
    padding-top: 5px;
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Description>
        I currently work as a self-employed, indie web developer. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Reiciendis, necessitatibus
        cupiditate, dolore exceptu
      </Description>
      <ServicesContainer>
        <Sq>
          <Title> Web Design</Title>
          <p>
            Create a web presence for your business. Whether you need a simple
            one pager, or a multi-page app to build your empire... I can help!
          </p>
        </Sq>
        <Sq>
          <Title>Blogging Content Mgmt Integration</Title>
          <p>
            Need a blog? Youre at the right place! I portfolio with many
            different types of tools, including Wordpress.
          </p>
        </Sq>
      </ServicesContainer>
      <SkillsContainer>
        <Sq>
          <Title>Skills</Title>
          <ul>
            <li>
              <b>Programming Languages:</b> Javascript, PHP
            </li>
            <li>
              <b>Libraries & Frameworks: </b> React, NextJS, Node,
              Styled-Components, bootstrap, SASS
            </li>
            <li>
              <b>Tools & Databases:</b> Wordpress, Sanity.io, Git, Mailchimp API
            </li>
          </ul>
        </Sq>
      </SkillsContainer>
    </Wrapper>
  );
};

export default About;
