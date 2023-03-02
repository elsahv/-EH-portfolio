import Image from "next/image";
import content from "./data";
import {
  Wrapper,
  Title,
  Container,
  Grid,
  Content,
  ItemTitle,
  ImgWrapper,
} from "./PkgRate.styled";

export default function PkgRate({ title, description, madeWith, listItem2 }) {
  return (
    <Wrapper>
      <Container>
        <Title>Featured Websites</Title>
      </Container>
      <Container>
        <Grid>
          {content.map((item, index) => (
            <div key={index}>
              <ImgWrapper>
                <a href={item.listItem2}>
                  <Image
                    src={item.image}
                    alt="about-me"
                    layout="responsive"
                    className="img"
                  />
                </a>
              </ImgWrapper>
              <Content>
                <ItemTitle>{item.title}</ItemTitle>
                <>
                  <p>{item.description}</p>
                  {/* <li>{item.madeWith}</li> */}
                </>
              </Content>
            </div>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
