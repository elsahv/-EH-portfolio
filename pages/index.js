import Link from "next/link";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { sanityClient, urlFor } from "../client";
import { Title } from "../components/styles/title.styled";
import {
  PortfolioGrid,
  Sq,
  WebsiteTitle,
  WebsiteDescription,
  WebsiteTag,
} from "../components/styles/websites.styled";
import Aside from "../components/Aside";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";

export const IndexGrid = styled.div`
  // background: #fff;
  display: grid;
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const PostsGrid = styled.div`
  background: #fff;

  padding: 80px 20px;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;

  .section-spacing {
    padding-top: 150px;
    @media only screen and (max-width: 1024px) {
      padding-top: 50px;
    }
  }

  @media only screen and (max-width: 1024px) {
    border-left: none;
    border-bottom: none;
    padding: 50px 0 0 20px;
  }
`;

export const Section = styled.section`
  @media only screen and (max-width: 600px) {
  }
`;
const Description = styled.p`
  padding: 10px 50px;

  @media only screen and (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const ButtonWrapper = styled.div`
  // background: maroon;
  width: 270px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid #000;
  width: 130px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    padding: 5px;
  }
  a:hover {
    color: aquamarine;
    transition: 1s;
  }
  &:hover {
    background: teal;
    transition: 1s;
    color: aquamarine;
  }
`;

export const IconWrapper = styled.div`
  padding-top: 6px;
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

          <Section id="works" className="section-spacing">
            <Title>Works</Title>
            <Description>Here are my latest web designs</Description>
            <PortfolioGrid>
              {websites &&
                websites.map((website, index) => (
                  <span key={index}>
                    <Sq>
                      <WebsiteTitle>{website.websiteTitle}</WebsiteTitle>
                      <WebsiteDescription>
                        {website.description}
                      </WebsiteDescription>
                      {/* <WebsiteTag>-{website.tags}</WebsiteTag> */}
                      <ButtonWrapper>
                        <Button>
                          <Link href={website.projectLink}>visit site</Link>
                          <AiOutlineLink />
                        </Button>
                        <Button>
                          <Link href={website.codeLink}>view code</Link>
                          <AiFillGithub />
                        </Button>
                      </ButtonWrapper>
                    </Sq>
                  </span>
                ))}
            </PortfolioGrid>
          </Section>

          <Section id="contact" className="section-spacing">
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
