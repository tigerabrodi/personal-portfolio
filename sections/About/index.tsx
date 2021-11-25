import {
  AboutSection,
  AboutImage,
  AboutTitle,
  AboutText,
  AboutTextWrapper,
  TechnologiesWrapper,
  TechnologiesText,
  TechnologiesContainer,
  TechnologyText,
  TechnologyItem,
  RightArrow,
  TechnologiesList,
} from "./styles";
import { useOnScreen } from "../../hooks/useOnScreen";
import { firstTechnologyList, secondTechnologyList } from "./technologies";

export const About = () => {
  const { isVisible, setIntersectingElement } = useOnScreen();

  return (
    <AboutSection ref={setIntersectingElement} shouldFadeIn={isVisible}>
      <AboutImage src="/assets/avatar.jpeg" alt="Tiger, smiling brightly." />
      <AboutTitle id="about" tabIndex={-1}>
        About Me.
      </AboutTitle>
      <AboutTextWrapper>
        <AboutText>
          Hi! I’m Tiger and I love crafting things for the web. I discovered my
          passion for Web Development after having tried out Game Development
          back in 2016.
        </AboutText>
        <AboutText>
          I started working as a Frontend Developer in July 2020, and ever
          since, it has been a wonderful adventure for me.
        </AboutText>
        <AboutText>
          If I’m not doing anything coding-related, I enjoy doing calisthenics,
          running, doing kickboxing, watching anime or spending time with my
          family.
        </AboutText>
      </AboutTextWrapper>
      <TechnologiesWrapper>
        <TechnologiesText>
          Some tools, technologies or concepts I’m familiar or have worked with:
        </TechnologiesText>
        <TechnologiesContainer>
          <TechnologiesList>
            {firstTechnologyList.map(({ text, id }) => (
              <TechnologyItem key={id}>
                <RightArrow aria-hidden="true" id={id} />
                <TechnologyText>{text}</TechnologyText>
              </TechnologyItem>
            ))}
          </TechnologiesList>

          <TechnologiesList>
            {secondTechnologyList.map(({ text, id }) => (
              <TechnologyItem key={id}>
                <RightArrow aria-hidden="true" id={id} />
                <TechnologyText>{text}</TechnologyText>
              </TechnologyItem>
            ))}
          </TechnologiesList>
        </TechnologiesContainer>
      </TechnologiesWrapper>
    </AboutSection>
  );
};
