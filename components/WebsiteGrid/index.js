import Link from "next/link";
import Image from "next/image";
import content from "./data";
import { Wrapper, Container, Grid, ItemTitle, ImgWrapper } from "./styled";

export default function PkgRate({ title, description, madeWith, listItem2 }) {
  return (
    // <Wrapper>
    <Container>
      <Grid>
        {content.map((item, index) => (
          <div key={index}>
            <ItemTitle>{item.title}</ItemTitle>

            <ImgWrapper>
              <a href={item.listItem2}>
                <Image
                  src={item.image}
                  className="img"
                  alt="about-me"
                  layout="responsive"
                  height="1100px"
                />
              </a>
            </ImgWrapper>
            <p style={{ padding: "10px 3px" }}>{item.description}</p>
            <div>{item.madeWith}</div>
          </div>
        ))}
      </Grid>
    </Container>
    // </Wrapper>
  );
}
