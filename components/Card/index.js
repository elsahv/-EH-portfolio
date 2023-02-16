import Link from "next/link";
import { urlFor } from "../../utils/image";
import {
  Sq,
  WebsiteTags,
  Sq2,
  ImgWrapper,
  WebsiteTitle,
  WebsiteDescription,
  ButtonWrapper,
  Button,
} from "./styled";

export default function Card({ website }) {
  return (
    <Sq>
      <Sq2>
        <WebsiteTags>
          <b style={{ paddingRight: "7px" }}>made with:</b>
          <i>{website.tags}</i>
        </WebsiteTags>
      </Sq2>

      <ImgWrapper>
        <Link href={website.projectLink}>
          <img
            src={urlFor(website.websiteImg)}
            width="100%"
            alt=""
            className="img"
          />
        </Link>
      </ImgWrapper>
      <Sq2>
        <WebsiteTitle>{website.websitetitle}</WebsiteTitle>
        <WebsiteDescription>{website.description}</WebsiteDescription>

        <ButtonWrapper>
          <Button>
            <Link href={website.projectLink}>visit site</Link>
          </Button>
          <Button>
            <Link href={website.codeLink}>view code</Link>
          </Button>
        </ButtonWrapper>
      </Sq2>
    </Sq>
  );
}
