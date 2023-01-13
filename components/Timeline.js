import styled from "styled-components";

const TimelineWrapper = styled.div`
  padding: 15px;
  // background: teal;
  h2 {
    @media only screen and (max-width: 1024px) {
      font-size: 18px;
    }
  }
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
              Taught myself programming and web design through various (and
              super helpful!) youtube developers. Also utilized other resources
              such as: freecodecamp, the odin project, geeks for geeks.
            </p>
            <p>Spent this time building my featured projects</p>
          </li>
          <li>
            <TimelineDate> 2016-2020:</TimelineDate>
            <p>
              Worked in restaurants and assisted living kitchens. Worked as a
              Dietary Manager from 2018-2020.... loved it until I desired a
              change, mainly for finding more creative employment. Became
              interested with programming and started building my skills.
            </p>
          </li>
          <li>
            <TimelineDate>2016</TimelineDate>
            <p>
              Completed Bachelors of Science in Nutrition and Food Science, Cal
              State San Bernardino
            </p>
          </li>
        </ul>
      </TimelineWrapper>
    </>
  );
};

export default Timeline;
