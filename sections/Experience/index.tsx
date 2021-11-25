import * as React from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { v4 as uuidv4 } from "uuid";
import { experiences } from "./experiences";
import {
  ExperienceDescription,
  ExperienceItem,
  ExperienceItemList,
  ExperienceSection,
  ExperienceTitle,
  AccordionButton,
  AccordionContent,
  AccordionButtonText,
  AccordionOpenArrow,
  AccordionButtonTextWrapper,
  AccordionCloseArrow,
  AccordionContentItem,
  AccordionRightArrow,
  AccordionContentText,
} from "./styles";

export const Experience = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isVisible, setIntersectingElement } = useOnScreen({ threshold: 0.5 });

  const toggleOpenState = () => setIsOpen(!isOpen);

  return (
    <ExperienceSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <ExperienceTitle id="experience" tabIndex={-1}>
        Experience.
      </ExperienceTitle>
      <ExperienceDescription>
        Where I have worked and some of my contributions to the places.
      </ExperienceDescription>
      <ExperienceItemList aria-label="Accordion control group buttons revealing the contributions of the various places I worked.">
        {experiences.map(({ company, role, date, id, contributions }) => (
          <ExperienceItem key={id}>
            <AccordionButton
              aria-controls={`content-${id}`}
              aria-expanded={isOpen ? "true" : "false"}
              type="button"
              onClick={toggleOpenState}
            >
              <AccordionButtonTextWrapper>
                <AccordionButtonText>{company}</AccordionButtonText>
                <AccordionButtonText>{role}</AccordionButtonText>
                <AccordionButtonText>{date}</AccordionButtonText>
              </AccordionButtonTextWrapper>
              {isOpen ? (
                <AccordionCloseArrow aria-hidden="true" />
              ) : (
                <AccordionOpenArrow aria-hidden="true" />
              )}
            </AccordionButton>
            <AccordionContent
              aria-hidden={isOpen ? "false" : "true"}
              id={`content-${id}`}
            >
              {contributions.map((contribution) => (
                <AccordionContentItem key={uuidv4()}>
                  <AccordionRightArrow aria-hidden="true" id={uuidv4()} />
                  <AccordionContentText>{contribution}</AccordionContentText>
                </AccordionContentItem>
              ))}
            </AccordionContent>
          </ExperienceItem>
        ))}
      </ExperienceItemList>
    </ExperienceSection>
  );
};
