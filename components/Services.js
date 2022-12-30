import React from "react";
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
  padding-bottom: 15px;
  border-bottom: 1px solid #000;
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
const SkillsTitle = styled.h3`
  @media only screen and (max-width: 1024px) {
    text-decoration: underline;
    font-size: 27px;
  }
`;

const AboutTimeline = styled.div`
  // padding: 15px 145px 0 55px;
  li {
    margin: 15px 0;
  }
`;

const TimelineDate = styled.div`
  font-weight: bold;
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
        <AboutTimeline>
          <ul>
            <li>
              {/* <h2>A little bit about me...</h2> */}
              <TimelineDate> Web Design</TimelineDate>
              Create a web presence for your business. Whether you need a simple
              one pager, or a multi-page app to build your empire... I can help!
            </li>
            {/* <li>
              <TimelineDate>Web + Hosting</TimelineDate>I work one-on-one with
              clients regarding hosting and maintenance, leaving them to fully
              concentrate on their businesses.
            </li> */}
            <li>
              <TimelineDate>Blogging Content Mgmt Integration</TimelineDate>
              Need a blog? Youre at the right place! I portfolio with many
              different types of tools, including Wordpress.
            </li>
          </ul>
        </AboutTimeline>
      </TimelineWrapper>
      <SkillsWrapper>
        <>
          <SkillsTitle>Skills</SkillsTitle>
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
        </>
      </SkillsWrapper>
    </AboutGrid>
  );
};

export default About;
