import styled from "styled-components";
import ContactForm from "./ContactForm";

export const ContactCTA = styled.div`
  p {
    margin: 5px;
  }
  @media only screen and (max-width: 834px) {
    padding: 7px 10px 0 5px;
  }
`;

export default function Contact() {
  return (
    <section className="section-spacing">
      <h2 className="title">Contact</h2>
      <ContactCTA>
        <p>
          Has my portfolio piqued your interest? If so, you can reach me at
          devdesignsbyelsa@gmail.com, or simply fill out the form below!
        </p>
        <p style={{ paddingTop: "15px" }}>
          Looking forward to hearing from you!
        </p>
      </ContactCTA>
      <ContactForm />
    </section>
  );
}
