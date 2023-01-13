import styled from "styled-components";

const Description = styled.p`
  //   grid-area: a;
  padding: 5px 0 10px;
  //   border-bottom: 1px solid #000;
  //
`;

const Intro = () => {
  return (
    <div>
      <h2 className="title">Portfolio</h2>
      <Description>
        Goal: To find occupation in javascript web development, and build up my
        skills further. I am currently building two different online communites,
        one catered towards Registered Dietitans/Nutritionists, and the other
        for creatives and content writers.
      </Description>
    </div>
  );
};

export default Intro;
