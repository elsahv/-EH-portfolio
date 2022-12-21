import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { ContentWrapper, CTA, SmIcons } from "./contactSection.styled";

const ContactSection = () => {
  return (
    <>
      <ContentWrapper id="contact">
        <CTA>
          <p>You can reach me at:</p>

          <a href="mailto:devdesignsbyelsa@gmail.com">
            devdesignsbyelsa@gmail.com
          </a>
          <SmIcons>
            <p>You can also find me on:</p>
            <a className="sm-icon" href="http://github.com/elsahv">
              <FaGithub /> Github
            </a>
            <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey">
              <FaLinkedin /> LinkedIn
            </a>
            <a
              className="sm-icon"
              href="https://www.instagram.com/elsahoveydevdesign/"
            >
              <FaInstagram /> Instagram
            </a>
          </SmIcons>
        </CTA>
      </ContentWrapper>
    </>
  );
};
export default ContactSection;
