import styled from "styled-components";

export const Flex = styled.div`
  display: flex;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
