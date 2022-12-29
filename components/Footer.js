import styled from "styled-components";

export const Footer = styled.footer`
  padding: 30px 25px 20px 50px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
`;
const FooterSection = () => {
  return <Footer> Elsa Hovey- Copyright @2022</Footer>;
};

export default FooterSection;
