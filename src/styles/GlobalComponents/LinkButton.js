import React from "react";

import { ButtonBack, LinkButtonFront } from "./index";

const LinkButton = (props) => (
  <ButtonBack $alt={props.alt} disabled={props.disabled}>
    <span aria-hidden="true">{props.children}</span>
    <LinkButtonFront
      $alt={props.alt}
      href={props.href}
      target={props.target}
      rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      disabled={props.disabled || false}
    >
      {props.children}
    </LinkButtonFront>
  </ButtonBack>
);

export default LinkButton;
