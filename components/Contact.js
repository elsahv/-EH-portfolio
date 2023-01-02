import styled from "styled-components";

export const Flex = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr;
  grid-template-areas: "left right";
  @media only screen and (max-width: 1024px) {
    grid-template-column: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

export const ContentWrapper = styled.div`
  grid-area: right;
  // padding: 25px 50px;

  @media only screen and (max-width: 1024px) {
    padding: 0 15px 15px 5px;
  }
`;

const Contact = () => {
  return (
    <Flex>
      <ContentWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          exercitationem distinctio quis, mollitia harum quidem ab cupiditate
          temporibus laudantium aliquam vitae quibusdam? Iste vero corrupti
          sapiente ex quisquam! Reprehenderit, consequuntur.
        </p>
        <p>you can contact me devdesignsbyelsa@gmail.com</p>
      </ContentWrapper>
    </Flex>
  );
};

export default Contact;
