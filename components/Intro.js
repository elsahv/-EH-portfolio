import Link from "next/link";
import { IntroSection } from "./styles/intro.styled";

const Intro = () => {
  return (
    <>
      <IntroSection>
        <p>
          I currently run two design studios: one catered to:
          <Link a href="https://writingtobetterhealth.com">
            registered dietitian nutritionists
          </Link>
          , and the other for:
          <Link href="/">small business owners and creatives.</Link>
        </p>
        <p style={{ paddingTop: "8px", fontSize: "22px" }}>
          Scroll down, and you can see all of my featured projects, read a
          little bit about me, or contact me... feel free to look around!
        </p>
      </IntroSection>
    </>
  );
};

export default Intro;
