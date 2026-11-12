import React, { useCallback, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxImg, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { Achievements } from "../../constants/constants";
import Lightbox, { openOnKey } from "../Lightbox/Lightbox";

const Acomplishments = () => {
  const [enlarged, setEnlarged] = useState(null);
  const close = useCallback(() => setEnlarged(null), []);

  return (
    <Section id="achievements">
      <SectionDivider />
      <SectionTitle>Achievements</SectionTitle>
      <Boxes>
        {Achievements.map((item, index) => {
          const open = () => setEnlarged({ src: item.image, alt: item.alt });
          return (
            <Box
              key={index}
              {...(item.image && {
                role: "button",
                tabIndex: 0,
                "aria-label": `Enlarge ${item.title} certificate`,
                onClick: open,
                onKeyDown: openOnKey(open),
                $zoom: true,
              })}
            >
              {item.image && (
                <BoxImg
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
              )}
              <BoxNum as="h3">{item.title}</BoxNum>
              <BoxText>{item.detail}</BoxText>
            </Box>
          );
        })}
      </Boxes>
      <Lightbox image={enlarged} onClose={close} />
    </Section>
  );
};

export default Acomplishments;
