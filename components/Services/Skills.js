import styled from "styled-components";

const SkillsTitle = styled.h3`
  @media only screen and (max-width: 1024px) {
    text-decoration: underline;
    font-size: 27px;
  }
`;

const Skills = () => {
  return (
    <div>
      <SkillsTitle>Skills</SkillsTitle>
      <ul>
        <li>React</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Wordpress</li>
        <li>Sanity</li>
        <li>styled-components</li>
        <li>Sass</li>
      </ul>
    </div>
  );
};

export default Skills;
