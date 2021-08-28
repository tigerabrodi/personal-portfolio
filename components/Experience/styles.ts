import styled from "styled-components";
import { focusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";
import RightArrowSVG from "../../assets/right-arrow.svg";
import DownArrowSVG from "../../assets/down-arrow.svg";
import UpArrowSVG from "../../assets/up-arrow.svg";

export const ExperienceSection = styled.section`
  width: 100vw;
  display: grid;
  grid-template-areas: "title" "description" "items" ".";
  grid-template-rows: 5rem 5rem auto 3rem;
  align-items: center;
  justify-items: center;
`;

export const ExperienceTitle = styled.h1`
  grid-area: title;
  font-family: ${theme.Oxanium};
  font-size: 3rem;
  font-weight: 600;
  color: ${theme.Pink};
`;

export const ExperienceDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Oxanium};
  font-size: 1.4rem;
  font-weight: 400;
  width: 24ch;
  text-align: center;
  color: ${theme.Orange};
`;

export const ExperienceItemList = styled.ul`
  grid-area: items;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  margin: 2rem 0;
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25.8rem;
  position: relative;
  left: 0.75rem;
`;

export const AccordionButton = styled.button`
  width: 100%;
  height: 5rem;
  position: relative;
  z-index: 5;
  border-radius: 0.7rem;
  background-color: ${theme.Orange};
  display: grid;
  grid-template-areas: "text arrow";
  grid-template-columns: 70% 30%;
  grid-template-rows: 80%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1rem;
  color: ${theme.DarkBrown};
  border: none;
  &[aria-expanded="true"] {
    font-weight: bold;
  }
  ${focusStyles}
`;

export const AccordionContent = styled.ul`
  visibility: hidden;
  position: relative;
  bottom: 0.5rem;
  height: 2rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  li {
    visibility: hidden;
  }
  &[aria-hidden="false"] {
    visibility: visible;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 23rem;
    width: 100%;
    border: 0.2rem solid ${theme.Orange};
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    box-shadow: 0 0.2rem 0.2rem black;
    transition: all 0.2s ease-in-out;
    li {
      visibility: visible;
    }
  }
`;

export const AccordionButtonTextWrapper = styled.div`
  grid-area: text;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const AccordionButtonText = styled.span`
  padding-left: 0.75rem;
`;

export const AccordionOpenArrow = styled(DownArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  grid-area: arrow;
`;

export const AccordionCloseArrow = styled(UpArrowSVG)`
  width: 3rem;
  height: 1.6rem;
  fill: ${theme.DarkBrown};
  grid-area: arrow;
`;

export const AccordionContentItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  padding-left: 1rem;
`;

export const AccordionRightArrow = styled(RightArrowSVG)`
  width: 1rem;
  height: 1rem;
`;

export const AccordionContentText = styled.p`
  font-family: ${theme.Montserrat};
  color: ${theme.Orange};
  font-weight: 500;
  padding-left: 0.5rem;
  font-size: 0.8rem;
  align-self: center;
  max-width: 43ch;
`;