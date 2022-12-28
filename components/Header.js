import Link from "next/link";
import Image from "next/image";
import {
  Header,
  HeaderItems,
  Logo,
  SmIcons,
  AboutImgWrapper,
} from "./styles/header.styled";
import { Flex } from "./styles/flex.styled";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import JtPic from "../public/images/joshuatreeabout.jpg";

const HeaderSection = () => {
  return (
    <>
      <Header>
        <HeaderItems>
          <Logo>Elsa Hovey</Logo>
          <p>Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.</p>
          <SmIcons>
            <Flex>
              <Link href="">
                <AiOutlineMail />
              </Link>
              <Link href="">
                <AiFillLinkedin />
              </Link>
              <Link href="">
                <AiOutlineInstagram />
              </Link>
            </Flex>
          </SmIcons>
        </HeaderItems>
        <AboutImgWrapper>
          <Image
            className="portfolio-img"
            src={JtPic}
            alt="elsa hovey"
            layout="responsive"
          />
        </AboutImgWrapper>
      </Header>
    </>
  );
};

export default HeaderSection;
