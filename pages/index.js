import styled from "styled-components";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { sanityClient, urlFor } from "../client";
import { Flex } from "../components/styles/flex.styled";
import { Title } from "../components/styles/title.styled";
import { PortfolioGrid, Sq, Icon } from "../components/styles/websites.styled";
import Aside from "../components/Aside";

export const IndexGrid = styled.div`
  // background: orange;
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

export const PostsGrid = styled.div`
  padding: 80px 50px;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-bottom: solid 2px #000;
`;

export const Section = styled.section`
  // background: teal;
  // padding-bottom: 150px 0;
`;

export const PostsWrapper = styled.div`
  background: #fff;
  border-left: solid 1px black;

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-top: solid 2px black;
  }
`;

const test = ({ websites }) => {
  return (
    <>
      <IndexGrid>
        <Aside />
        <PostsWrapper>
          <PostsGrid>
            <Section id="services">
              <Title>Services</Title>
              <Services />
            </Section>

            <Section id="works" style={{ paddingTop: "150px" }}>
              <Title>Works</Title>
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
            </Section>

            <Section id="contact" style={{ paddingTop: "150px" }}>
              <Title>Contact</Title>
              <Contact />
            </Section>
          </PostsGrid>
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
