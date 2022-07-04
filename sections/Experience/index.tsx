import * as React from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'
import { v4 as uuidv4 } from 'uuid'
import { experiences } from './experiences'
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
} from './styles'

export const Experience = () => {
  const [openStates, setOpenStates] = React.useState<Record<number, boolean>>({1: false, 2: false})

  const { isVisible, setIntersectingElement } = useOnScreen({ threshold: 0.5 })

  const toggleOpenState = (id: number) => setOpenStates({...openStates, [id]: !openStates[id]})

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
              aria-expanded={openStates[id] ? 'true' : 'false'}
              type="button"
              onClick={() => toggleOpenState(id)}
            >
              <AccordionButtonTextWrapper>
                <AccordionButtonText>{company}</AccordionButtonText>
                <AccordionButtonText>{role}</AccordionButtonText>
                <AccordionButtonText>{date}</AccordionButtonText>
              </AccordionButtonTextWrapper>
              {openStates[id] ? (
                <AccordionCloseArrow aria-hidden="true" />
              ) : (
                <AccordionOpenArrow aria-hidden="true" />
              )}
            </AccordionButton>
            <AccordionContent
              aria-hidden={openStates[id] ? 'false' : 'true'}
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
  )
}
