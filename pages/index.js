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
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  @media only screen and (max-width: 1024px) {
    grid-gap: 1em;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const PostsGrid = styled.div`
  padding: 80px 50px;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 2px #000;

  .section-spacing {
    padding-top: 150px;
    @media only screen and (max-width: 1024px) {
      padding-top: 50px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 50px 0 0 20px;
  }

  @media only screen and (max-width: 834px) {
    border-left: none;
    border-bottom: none;
  }
`;

export const Section = styled.section`
  @media only screen and (max-width: 600px) {
  }
`;
const Description = styled.p`
  padding: 10px 50px;
`;

const test = ({ websites }) => {
  return (
    <>
      <IndexGrid>
        <Aside />
        <PostsGrid>
          <Section id="services">
            <Title>Services</Title>
            <Services />
          </Section>

          <Section id="works" class="section-spacing">
            <Title>Works</Title>
            <Description>Here are my latest web designs</Description>
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

          <Section id="contact" class="section-spacing">
            <Title>Contact</Title>
            <Contact />
          </Section>
        </PostsGrid>
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
