import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { ButtonRow, HeroNote, LeftSection } from "./HeroStyles";
import { GmailComposeUrl, MailToUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <SectionTitle as="h1" main center>
          Hi, I'm Adi
        </SectionTitle>
        <SectionText>
          <span>Future Full-Stack Engineer from Malolos, Bulacan</span>
          <br />
          <span>
            BS Information Technology student at La Consolacion University of
            the Philippines, building web apps and systems for school and real
            users.
          </span>
        </SectionText>
        <ButtonRow>
          <LinkButton href={GmailComposeUrl} target="_blank">
            Let's Talk
          </LinkButton>
          <LinkButton alt="contact" href="#contact">
            Contact Me
          </LinkButton>
        </ButtonRow>
        <HeroNote>
          Not a Gmail user? <a href={MailToUrl}>Mail me from your own app</a>
        </HeroNote>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
