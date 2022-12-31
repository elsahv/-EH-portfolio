import styled from "styled-components";

const AboutTimeline = styled.div`
  // padding: 15px 145px 0 55px;
  li {
    margin: 15px 0;
    list-style: none;
  }
`;

const TimelineDate = styled.div`
  font-weight: bold;
`;

const Timeline = () => {
  return (
    <>
      <AboutTimeline>
        <ul>
          <li>
            <h2 style={{ paddingBottom: "10px" }}>A little bit about me...</h2>
            <TimelineDate> 2020-2022:</TimelineDate>
            <p>
              Career transition, built projects. Built Wtbh to utilize skills
              and nutrition interests. Built the laughing coyote for working
              with creatives. Built RQ for mern stack development and fill a
              void regarding small businesses in Morongo Basin
            </p>
          </li>
          <li>
            <TimelineDate> 2018-2020:</TimelineDate>
            <p>
              Worked as a Dietary Manager, loved it until I didnt. Became
              obsessed with programming and started building my skills.
            </p>
          </li>
          <li>
            <TimelineDate>2016:</TimelineDate>
            <p>Completed Bachelors Degree in Nutrition and Food Science</p>
          </li>
        </ul>
      </AboutTimeline>
    </>
  );
};

export default Timeline;
