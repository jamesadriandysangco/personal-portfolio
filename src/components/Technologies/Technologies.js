import React from "react";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      Most of what I build is web apps, with React or Next.js on the front and
      ASP.NET or Laravel behind them.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaLaptopCode size="3rem" aria-hidden="true" />
        </picture>
        <ListContainer>
          <ListTitle as="h3">Front-End</ListTitle>
          <ListParagraph>
            I write HTML, CSS, JavaScript and TypeScript, mostly through React
            and Next.js, and style with Tailwind CSS, Bootstrap or SCSS
            depending on the project.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaServer size="3rem" aria-hidden="true" />
        </picture>
        <ListContainer>
          <ListTitle as="h3">Back-End</ListTitle>
          <ListParagraph>
            Server-side I work with PHP and Laravel, C# and ASP.NET, and MySQL
            databases hosted on Aiven, and I also code in Python and Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTools size="3rem" aria-hidden="true" />
        </picture>
        <ListContainer>
          <ListTitle as="h3">Tools &amp; Design</ListTitle>
          <ListParagraph>
            I design in Figma, keep my code on GitHub, deploy with Vercel, and
            use AI tools like ChatGPT, Claude, GitHub Copilot and Gemini to
            debug and learn faster.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
