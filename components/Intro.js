import Link from "next/link";
import styled from "styled-components";

const Description = styled.div`
  padding: 5px 0 10px;
  width: 90%;
  p {
    padding: 20px 0;
  }
  a {
    color: #000;
    // text-decoration: none;
    padding: 0 5px;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;

const Intro = () => {
  return (
    <div>
      <Description>
        <p>
          - Welcome to my portfolio! For the past couple of years, Ive been
          teaching myself programming and web design using Javascript, and
          Javascript frameworks. My most ambitious project involves building a
          web design side hustle for
          <a href="https://writingtobetterhealth.com">
            Dietitans/Nutritionists.
          </a>
        </p>
        <p>
          - Listed below are some of my more complete featured projects, you can
          also see the code for my other projects
          <a href="https://github.com/elsahv">in progress.</a>I am always
          looking for opportunities to further my skills, and work with other
          like minded people in tech. If you would like to contact me can reach
          me
          <Link href="/#contact">here.</Link>
        </p>
      </Description>
    </div>
  );
};

export default Intro;
