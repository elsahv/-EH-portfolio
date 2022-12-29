import styled from "styled-components";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { sanityClient, urlFor } from "../client";
import { Flex } from "../components/styles/flex.styled";
import { Title } from "../components/styles/title.styled";

import {
  PortfolioGrid,
  Sq,
  Button,
  IconWrapper,
  Icon,
} from "../components/styles/websites.styled";
import Aside from "../components/Aside";

export const IndexGrid = styled.div`
  // background: orange;
  height: 100vh;
  display: grid;
  grid-template-areas: "ls rs";
  grid-gap: 2em;

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
  //
`;

export const MostRecentTitle = styled.h2`
  padding-top: 55px;
  text-align: center;
  font-size: 25px;
  text-decoration: underline;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
`;

export const PostsGrid = styled.div`
  grid-area: rs;
  // padding: 50px 105px;
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  border-bottom: solid 2px #000;
  // height: 100vh;
`;

export const PostsWrapper = styled.div`
  background: #fff;
  border-left: solid 1px black;

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-top: solid 2px black;
  }
`;

export const PostsSection = styled.div``;

const test = ({ websites }) => {
  return (
    <>
      <IndexGrid>
        <Aside />

        <PostsWrapper>
          <PostsSection>
            <PostsGrid>
              <Title id="services">Services</Title>
              <Services />
              <Title id="works">Works</Title>
              <PortfolioGrid>
                {websites &&
                  websites.map((website, index) => (
                    <span key={index}>
                      <Sq>
                        <Flex>
                          <h3>{website.websiteTitle}</h3>
                          <Icon>(i)</Icon>
                        </Flex>
                        <div>{website.description}</div>
                        <div>{website.tags}</div>
                      </Sq>
                    </span>
                  ))}
              </PortfolioGrid>

              <Title id="contact">Contact</Title>
              <Contact />
            </PostsGrid>
          </PostsSection>
        </PostsWrapper>
      </IndexGrid>
    </>
  );
};

export default test;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const websites = await sanityClient.fetch(query);
  if (!websites.length) {
    return {
      props: {
        websites: [],
      },
    };
  } else {
    return {
      props: {
        websites,
      },
    };
  }
};
