import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";
import GithubSVG from "../../assets/github.svg";
import ExternalSVG from "../../assets/external.svg";
import { focusStyles } from "../../theme/sharedStyles";
import { media } from "../../theme/media";

export const WorkSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: "title" "description" "list" ".";
  grid-template-rows: 5rem 5rem auto 8rem;
  ${media.tablet} {
    margin-top: 15rem;
    grid-template-rows: 10rem 10rem auto;
    grid-template-areas:
      "title"
      "description"
      "list";
  }
  ${media.desktop} {
    grid-template-rows: 9rem 14rem auto;
  }
  transition: transform 1s, opacity 2s;
  opacity: 0;
  transform: translateY(2rem);
  ${(props) =>
    props.shouldFadeIn &&
    css`
      transform: translateY(-2rem);
      opacity: 1;
    `};
`;

export const WorkTitle = styled.h1`
  font-family: ${theme.Oxanium};
  font-weight: 600;
  font-size: 3rem;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 7rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`;

export const WorkDescription = styled.p`
  line-height: 1.4;
  font-weight: 400;
  font-size: 1.4rem;
  font-family: ${theme.Montserrat};
  color: ${theme.Orange};
  text-align: center;
  width: 28ch;
  ${media.tablet} {
    font-size: 2.5rem;
    width: 30ch;
  }
  ${media.desktop} {
    font-size: 2.8rem;
  }
`;

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  row-gap: 2rem;
  ${media.tablet} {
    row-gap: 8rem;
  }
  ${media.desktop} {
    margin-top: 5rem;
    row-gap: 10rem;
  }
`;

export const WorkItem = styled.li`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas: "title title" "description description" "demo demo" "code live";
  border-bottom: 0.2rem solid ${theme.Orange};
  box-shadow: 0 0.3rem 1rem black;
  padding-bottom: 10px;
  width: 25rem;
  ${media.tablet} {
    width: 55rem;
    border-bottom: 0.3rem solid ${theme.Orange};
    box-shadow: 0 0.3rem 1rem black;
    padding-bottom: 20px;
  }
  ${media.desktop} {
    width: 60rem;
    border-bottom: 0.5rem solid ${theme.Orange};
  }
`;

export const ItemTitle = styled.h2`
  grid-area: title;
  font-weight: 600;
  font-family: ${theme.Oxanium};
  font-size: 2rem;
  color: ${theme.Pink};
  text-decoration: underline;
  margin-top: 1rem;
  ${media.tablet} {
    font-size: 4.5rem;
    margin-top: 2rem;
  }
  ${media.desktop} {
    font-size: 5rem;
  }
`;

export const ItemDescription = styled.p`
  grid-area: description;
  font-weight: 400;
  font-family: ${theme.Montserrat};
  font-size: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;
  color: ${theme.Orange};
  padding: 0 20px;
  ${media.tablet} {
    font-size: 2.3rem;
    margin-top: 1rem;
  }
  ${media.desktop} {
    font-size: 2.5rem;
  }
`;

export const ItemDemo = styled.video`
  grid-area: demo;
  width: 20rem;
  height: 13rem;
  box-shadow: 0 0.2rem 0.4rem black;
  margin-top: 2rem;
  ${media.tablet} {
    width: 47rem;
    height: 30rem;
    margin-top: 5rem;
  }
  ${media.desktop} {
    width: 49rem;
    height: 31rem;
  }
`;

const linkStyles = css`
  font-weight: 600;
  font-size: 1.7rem;
  font-family: ${theme.Oxanium};
  color: ${theme.Pink};
  text-decoration: none;
  position: relative;
  margin-top: 3rem;
  ${focusStyles}
  ${media.tablet} {
    font-size: 3rem;
    margin-top: 6rem;
    transition: all 0.2s ease-out;
    &:hover {
      transform: translateY(-0.2rem);
      filter: brightness(1.2);
      text-shadow: 0 0.4rem 0.2rem black;
      svg {
        filter: drop-shadow(0 0.2rem 0.2rem black);
      }
    }
    &:active {
      transform: translateY(0);
      text-shadow: 0 0.2rem 0.2rem black;
    }
  }
  ${media.desktop} {
    font-size: 3.5rem;
    margin-top: 7rem;
  }
`;

export const ItemCodeLink = styled.a`
  grid-area: code;
  ${linkStyles}
`;

export const ItemLiveLink = styled.a`
  grid-area: live;
  ${linkStyles}
`;

const iconStyles = css`
  fill: ${theme.Pink};
  position: absolute;
  right: 0;
`;

export const Github = styled(GithubSVG)`
  top: -1.1rem;
  left: 3.5rem;
  height: 1.2rem;
  width: 1.2rem;
  ${iconStyles}
  path {
    fill: ${theme.Pink};
  }
  ${media.tablet} {
    height: 2rem;
    width: 2rem;
    top: -1.6rem;
    left: 6.5rem;
    transition: all 0.2s ease-out;
    path {
      transition: all 0.2s ease-out;
    }
  }
  ${media.desktop} {
    height: 2.3rem;
    width: 2.3rem;
    top: -2rem;
    left: 7.2rem;
  }
`;

export const External = styled(ExternalSVG)`
  top: -0.9rem;
  left: 3.2rem;
  height: 1.1rem;
  width: 1.1rem;
  ${iconStyles}
  ${media.tablet} {
    width: 2rem;
    height: 2rem;
    top: -1.5rem;
    left: 5.4rem;
    transition: all 0.2s ease-out;
  }
  ${media.desktop} {
    width: 2.2rem;
    height: 2.2rem;
    top: -1.8rem;
    left: 6.2rem;
  }
`;
