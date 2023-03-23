import Image from "next/image";

import content from "./data";
import { RiComputerLine } from "react-icons/ri";
import { Spacing, Grid, Sq, ImgWrapper, Title } from "./styled";

const Tools = () => {
  return (
    <>
      <Spacing>
        <h3>
          <RiComputerLine style={{ marginRight: "10px" }} />
          Tech/ Skillset:
        </h3>
        <Grid>
          {content.map((item, index) => (
            <Sq key={index}>
              <Title>{item.tech}</Title>
              <ImgWrapper>
                <Image src={item.image} alt="about-me" layout="responsive" />
              </ImgWrapper>
            </Sq>
          ))}
        </Grid>
      </Spacing>
    </>
  );
};

export default Tools;
