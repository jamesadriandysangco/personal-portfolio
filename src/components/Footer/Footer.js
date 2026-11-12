import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  GithubUrl,
  LinkedInUrl,
  Location,
  MobileNumber,
  MobileNumberTel,
  PersonalEmail,
  OtherUrl,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionDivider colorAlt />
      <SectionTitle>Contact Me</SectionTitle>
      <LinkList>
        {MobileNumber && (
          <LinkColumn>
            <LinkTitle as="h3">Call</LinkTitle>
            <LinkItem href={`tel:${MobileNumberTel}`}>{MobileNumber}</LinkItem>
          </LinkColumn>
        )}
        <LinkColumn>
          <LinkTitle as="h3">Email</LinkTitle>
          <LinkItem href={`mailto:${PersonalEmail}`}>{PersonalEmail}</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle as="h3">Based in</LinkTitle>
          <LinkItem as="span">{Location}</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Open to internships and web development projects. Email is the
            fastest way to reach me.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          {GithubUrl && (
            <SocialIcons
              href={GithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size="3rem" aria-hidden="true" />
            </SocialIcons>
          )}
          {LinkedInUrl && (
            <SocialIcons
              href={LinkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size="3rem" aria-hidden="true" />
            </SocialIcons>
          )}
          {OtherUrl && (
            <SocialIcons
              href={OtherUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <AiFillFacebook size="3rem" aria-hidden="true" />
            </SocialIcons>
          )}
        </SocialContainer>
      </SocialIconsContainer>
      <LinkTitle as="p" style={{ textAlign: "center", marginTop: "32px" }}>
        Design inspired by{" "}
        <a
          href="https://github.com/Tanv33/Tanveer-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          Tanveer Khan
        </a>
        's portfolio template
      </LinkTitle>
    </FooterWrapper>
  );
};

export default Footer;
