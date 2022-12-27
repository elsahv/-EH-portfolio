import Link from "next/link";
import { IntroSection } from "./styles/intro.styled";

const Intro = () => {
  return (
    <>
      <IntroSection>
        <h4>
          Hi there,
          <div style={{ marginLeft: "5px" }}>{"I'm"}</div>
          <Link href="/#about">Elsa.</Link>
        </h4>
        <p>
          Im a web developer based in Joshua Tree, CA. I run two web design
          studios: one catered to:
          <Link a href="https://writingtobetterhealth.com">
            Registered Dietitian Nutritionists
          </Link>
          , and the other for:
          <Link href="/">small business owners and creatives.</Link>
        </p>
        {/* <br /> */}
        <p style={{ paddingTop: "8px", fontSize: "22px" }}>
          Listed below are some of my other passion projects... feel free to
          look around!
        </p>
      </IntroSection>
    </>
  );
};

export default Intro;
