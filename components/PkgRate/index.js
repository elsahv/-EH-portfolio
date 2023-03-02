import Image from "next/image";
import content from "./data";
import {
  Wrapper,
  Title,
  Description,
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
        {/* <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit
          consequatur saepe laudantium commodi reic.
        </Description> */}
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
                <ul>
                  <li>{item.description}</li>
                  <li>{item.madeWith}</li>
                </ul>
              </Content>
            </div>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
