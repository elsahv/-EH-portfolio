import Link from "next/link";
import Image from "next/image";
import content from "./data";
import { Container, Grid, Sq, ImgWrapper } from "./styled";

export default function PkgRate({ title, description, madeWith, listItem2 }) {
  return (
    <Container>
      <Grid>
        {content.map((item, index) => (
          <div key={index}>
            <Sq>
              <h2>{item.title}</h2>

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
            </Sq>
          </div>
        ))}
      </Grid>
    </Container>
  );
}
