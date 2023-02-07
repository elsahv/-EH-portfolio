import styled from "styled-components";

export const IndexGrid = styled.div`
  display: grid;
  grid-template-areas: "asideGrid sections sections sections";
  grid-gap: 1em;
`;
export const AsideGrid = styled.div`
  grid-area: asideGrid;
`;
export const SectionsGrid = styled.div`
  grid-area: sections;
`;

export default function Test() {
  return (
    <>
      <IndexGrid>
        <AsideGrid>aside</AsideGrid>
        <SectionsGrid>sections</SectionsGrid>
      </IndexGrid>
    </>
  );
}
