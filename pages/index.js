import Link from "next/link";
import styled from "styled-components";
import About from "../components/About";
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
`;

export const BlogBanner = styled.div`
  font-size: 20x;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 20px;
  padding: 60px 30px;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
  background: #fff;
  border-bottom: solid 2px black;

  @media only screen and (max-width: 834px) {
    padding: 30px 10px;
    // border: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
    padding-top: 30px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding: 30px 20px;
  }
`;

export const Aside = styled.div`
  grid-area: ls;
  background: #fff;
  border-right: solid 2px black;
  border-bottom: solid 2px black;
  width: 400px;

  @media only screen and (max-width: 834px) {
    width: 100%;
    // padding: 50px;
  }
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
        <Aside>
          <BlogBanner>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            cupiditate eum eveniet voluptate, u
          </BlogBanner>
          <p>Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.</p>

          <p>
            I currently run two design studios: one catered to:
            <Link a href="https://writingtobetterhealth.com">
              registered dietitian nutritionists
            </Link>
            , and the other for:
            <Link href="/">small business owners and creatives.</Link>
          </p>
          <p>you can see all of my featured works here</p>
          <ul>
            <li>services</li>
            <li>work</li>
            <li>contact</li>
          </ul>
        </Aside>
        <PostsWrapper>
          <PostsSection>
            <PostsGrid>
              <Title id="services">About</Title>
              <About />
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
              {/* <Title id="services">About</Title>
              <About /> */}
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
