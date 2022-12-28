import styled from "styled-components";

const AboutTimeline = styled.div`
  // padding: 15px 145px 0 55px;
  li {
    margin: 15px 0;
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
            <TimelineDate> 2020-2022:</TimelineDate>
            Career transition, built projects. Built Wtbh to utilize skills and
            nutrition interests. Built the laughing coyote for working with
            creatives. Built RQ for mern stack development and fill a void
            regarding small businesses in Morongo Basin
          </li>
          <li>
            <TimelineDate> 2018-2020:</TimelineDate>
            Worked as a Dietary Manager, loved it until I didnt. Became obsessed
            with programming and started building my skills.
          </li>
          <li>
            <TimelineDate>2016:</TimelineDate>
            Completed Bachelors Degree in Nutrition and Food Science
          </li>
        </ul>
      </AboutTimeline>
    </>
  );
};

export default Timeline;
