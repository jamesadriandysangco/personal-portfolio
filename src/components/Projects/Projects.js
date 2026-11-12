import React, { useCallback, useState } from "react";

import {
  BlogCard,
  CardBody,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Lightbox, { openOnKey } from "../Lightbox/Lightbox";

const Projects = () => {
  const [enlarged, setEnlarged] = useState(null);
  const close = useCallback(() => setEnlarged(null), []);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          const shot = {
            src: p.image,
            alt: p.alt || `Screenshot of ${p.title}`,
          };
          const open = () => setEnlarged(shot);
          return (
            <BlogCard key={i}>
              {p.image && (
                <Img
                  src={p.image}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  role="button"
                  tabIndex={0}
                  aria-label={`Enlarge ${p.title} screenshot`}
                  onClick={open}
                  onKeyDown={openOnKey(open)}
                />
              )}
              <CardBody>
                <TitleContent>
                  <HeaderThree>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
              </CardBody>
            </BlogCard>
          );
        })}
      </GridContainer>
      <Lightbox image={enlarged} onClose={close} />
    </Section>
  );
};

export default Projects;
