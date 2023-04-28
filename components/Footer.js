const today = new Date();
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 30px 25px 20px 50px;
  display: flex;
  justify-content: center;
  background: lightgray;
  @media only screen and (max-width: 600px) {
    border-top: 2px solid #000;
  }
`;
const FooterSection = () => {
  return (
    <Footer>
      <p className="">Copyright &copy; {today.getFullYear()}</p>
    </Footer>
  );
};

export default FooterSection;
