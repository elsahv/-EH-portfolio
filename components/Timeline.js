import styled from "styled-components";

const TimelineWrapper = styled.div`
  padding: 15px;
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
      <TimelineWrapper>
        <ul>
          <li>
            <h2 style={{ paddingBottom: "10px" }}>A little bit about me...</h2>
            <TimelineDate> 2020-2022:</TimelineDate>
            <p>
              Career transition: built projects. Built Wtbh to utilize skills
              and nutrition interests, and the Indoor Jungle Project for
              blogging about plants, fish, clay.
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
      </TimelineWrapper>
    </>
  );
};

export default Timeline;
