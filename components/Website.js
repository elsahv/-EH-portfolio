import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";

export const Sq = styled.div`
  border: solid 2px gray;
  margin: 10px 0;
  border-radius: 5px;
  // background: teal;
`;

export const WebsiteTags = styled.div`
  //   padding: 12px 10px;
  //   @media only screen and (max-width: 531px) {
  //   }
  //
`;

const Sq2 = styled.div`
  // background: green;
  padding: 15px 10px;
`;

const ImgWrapper = styled.div`
  .img {
    border-bottom: solid 1px #000;
    border-top: solid 1px #000;
  }
`;

export const WebsiteTitle = styled.h3`
  font-size: 20px;
  // padding: 10px;
  @media only screen and (max-width: 531px) {
  }
`;

export const WebsiteDescription = styled.p`
  // font-style: italic;
  // padding: 5px 0;
  @media only screen and (max-width: 531px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // background: blue;
  margin: 20px 0 0 5px 10px;
  width: 45%;
  @media only screen and (max-width: 834px) {
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
  @media only screen and (max-width: 599px) {
    width: 82%;
  }
`;

export const Button = styled.button`
  background: #0892a5;
  border: 1px solid #000;
  width: 130px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  border-radius: 3px;
  a {
    text-decoration: none;
    color: #000;
    // background: aquamarine;
    // text-shadow: 1px 1px 1px #000;
    padding: 5px;
  }
  a:hover {
    transition: 1s;
    background: #0892a5;
    color: aquamarine;
    // text-shadow: 1px 1px 1px #000;
  }
  &:hover {
    transition: 1s;
    background: #0892a5;
    color: aquamarine;
  }
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export default function Card({ website }) {
  return (
    <Sq>
      <Sq2>
        <WebsiteTags>
          <b style={{ paddingRight: "7px" }}>made with:</b>
          <i>{website.tags}</i>
        </WebsiteTags>
        <ImgWrapper>
          <img
            src={urlFor(website.websiteImg)}
            width="100%"
            alt=""
            className="img"
          />
        </ImgWrapper>
        <WebsiteTitle>{website.websitetitle}</WebsiteTitle>
        <WebsiteDescription>{website.description}</WebsiteDescription>

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
      </Sq2>
    </Sq>
  );
}
