import styled, { css } from "styled-components";
import { RightArrowIcon } from "../../icons/RightArrow";
import { media } from "../../theme/media";
import { theme } from "../../theme/theme";

export const AboutSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  height: 93rem;
  ${media.tablet} {
    margin-top: 0;
    width: 85%;
    height: auto;
    padding-bottom: 160px;
  }
  ${media.desktop} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }
  transition: transform 1s ease-out, opacity 2s ease-out;
  opacity: 0;
  transform: translateY(2rem);
  ${(props) =>
    props.shouldFadeIn &&
    css`
      transform: translateY(-2rem);
      opacity: 1;
    `};
`;

export const AboutImage = styled.img`
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0.2rem 0.2rem black;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  position: relative;
  ${media.tablet} {
    width: 25rem;
    height: 25rem;
    box-shadow: 0 0.3rem 0.5rem black;
  }
  ${media.desktop} {
    width: 30rem;
    height: 30rem;
  }
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.Oxanium};
  color: ${theme.Pink};
  font-weight: 600;
  font-size: 3rem;
  margin-top: 10px;
  ${media.tablet} {
    font-size: 6rem;
    margin-top: 30px;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`;

export const AboutTextWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${theme.Orange};
  font-family: ${theme.Montserrat};
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  height: 100%;
  margin-top: 15px;
  width: 26ch;
  justify-content: flex-start;
  row-gap: 25px;
  ${media.tablet} {
    font-size: 2rem;
    justify-content: space-evenly;
    height: 80%;
    margin-top: 40px;
    width: 80%;
    line-height: 1.7;
  }
  ${media.desktop} {
    font-size: 2.3rem;
    font-weight: 500;
  }
`;

export const AboutText = styled.span`
  display: block;
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
  ${media.tablet} {
    margin-top: 70px;
    width: 100%;
  }
  ${media.desktop} {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
  }
`;

export const TechnologiesText = styled.p`
  font-family: ${theme.Montserrat};
  font-weight: 600;
  width: 26ch;
  text-align: center;
  color: ${theme.Orange};
  line-height: 1.5;
  font-size: 1.5rem;
  ${media.tablet} {
    font-family: ${theme.Oxanium};
    line-height: 1.5;
    font-size: 2.7rem;
    width: 40ch;
  }
  ${media.desktop} {
    font-size: 2.5rem;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  width: 27rem;
  left: 2.2rem;
  height: 90%;
  ${media.tablet} {
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const TechnologiesList = styled.ul`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 50px;
  ${media.tablet} {
    row-gap: 60px;
    align-items: center;
    width: auto;
    margin-top: 70px;
  }
`;

export const TechnologyItem = styled.li`
  height: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const RightArrow = styled(RightArrowIcon)`
  height: 1rem;
  width: 1rem;
  ${media.tablet} {
    height: 1.7rem;
    width: 1.7rem;
  }
`;

export const TechnologyText = styled.span`
  font-weight: 500;
  font-family: ${theme.Oxanium};
  color: ${theme.Orange};
  padding-left: 5px;
  font-size: 1.2rem;
  ${media.tablet} {
    font-size: 2rem;
    padding-left: 10px;
  }
  ${media.desktop} {
    font-size: 1.9rem;
  }
`;
