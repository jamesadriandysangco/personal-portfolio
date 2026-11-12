import React from "react";

import { Item, ItemList, YearList, YearTitle } from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider colorAlt />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm James, a BS Information Technology student at La Consolacion
        University of the Philippines. I started in 2022 and graduate in 2027.
        My first web pages came out of senior high at STI College Malolos, where
        I took the Mobile App and Web Development strand.
      </SectionText>
      <SectionText>
        These days the front end is usually React or Next.js. For the back end I
        reach for ASP.NET or Laravel, depending on the project.
      </SectionText>
      <YearList>
        {TimeLineData.map((entry) => (
          <li key={entry.year}>
            <YearTitle>{entry.year}</YearTitle>
            <ItemList>
              {entry.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </ItemList>
          </li>
        ))}
      </YearList>
    </Section>
  );
};

export default Timeline;
