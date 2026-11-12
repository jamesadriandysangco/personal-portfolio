import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";
import { GithubUrl, LinkedInUrl, OtherUrl } from "../../constants/constants";

const Header = () => (
  <Container>
    <Div2 as="ul" aria-label="Sections">
      <li>
        <Link href="#home" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#achievements" passHref>
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
