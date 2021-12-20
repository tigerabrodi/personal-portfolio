import styled, { css } from 'styled-components'
import { media } from '../../theme/media'
import { focusStyles, secondFocusStyles } from '../../theme/sharedStyles'
import { theme } from '../../theme/theme'

export const ContactSection = styled.section<{ shouldFadeIn: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  transition: transform 1s ease-out, opacity 2s ease-out;
  opacity: 0;
  transform: translateY(2rem);
  height: 32rem;
  padding-bottom: 2rem;
  ${media.custom(360)} {
    height: 34rem;
  }
  ${media.tablet} {
    padding-bottom: 0;
    height: 50rem;
  }
  ${(props) =>
    props.shouldFadeIn &&
    css`
      transform: translateY(-2rem);
      opacity: 1;
    `};
`

export const ContactTitle = styled.h2`
  grid-area: title;
  font-family: ${theme.Oxanium};
  font-weight: 600;
  font-size: 3rem;
  color: ${theme.Pink};
  ${media.tablet} {
    font-size: 6rem;
  }
  ${media.desktop} {
    font-size: 8rem;
  }
`

export const ContactDescription = styled.p`
  grid-area: description;
  font-family: ${theme.Montserrat};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4;
  text-align: center;
  color: ${theme.Orange};
  width: 26ch;
  margin-top: 2rem;
  ${media.custom(360)} {
    width: 28ch;
  }
  ${media.tablet} {
    width: 35ch;
    font-size: 2.5rem;
  }
  ${media.desktop} {
    width: 41ch;
  }
`

export const DescriptionLink = styled.a`
  color: ${theme.Pink};
  text-decoration: underline;
  ${secondFocusStyles}
  ${media.tablet} {
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: transform 0.3s ease-out;
    transform-origin: top left;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.3rem;
      transform-origin: left;
      width: 102%;
      height: 108%;
      background-color: #f72405ba;
      transform: scaleX(0) translateX(-0.1rem);
      border-radius: 2px;
      transition: all 0.3s ease-out;
      z-index: -5;
    }
    &:hover {
      transition: transform 0.2s ease-out;
      transform: scale(1.01);
      &::after {
        transition: all 0.2s ease-out;
        transform: scaleX(1) translateX(-0.1rem) rotate(-1deg);
      }
    }
    &:active {
      transform: scale(0.98);
      transition: transform 0.1s ease-out;
    }
  }
`

export const ContactLink = styled.a`
  grid-area: link;
  color: ${theme.Orange};
  text-decoration: none;
  border-radius: 3px;
  padding: 10px 15px;
  border: 1px solid ${theme.Orange};
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.2rem;
  box-shadow: 0 1px 2px black;
  margin-top: auto;
  box-shadow: 0 2px 2px black, 0 2px 4px black, 0 2px 5px black;
  ${focusStyles}
  ${media.custom(360)} {
    font-size: 1.4rem;
    padding: 10px 20px;
  }
  ${media.tablet} {
    font-size: 2.5rem;
    padding: 20px 40px;
    border: 2px solid ${theme.Orange};
    transition: all 0.3s ease-out;
    &:hover {
      background-color: ${theme.Orange};
      color: ${theme.DarkBrown};
      box-shadow: 0 3px 2px black;
      transform: translateY(-3px);
      transition: all 0.2s ease-out;
    }
    &:active {
      transform: translateY(-1px) scale(0.99);
      transition: all 0.1s ease;
      box-shadow: 0 2px 2px black;
    }
  }
`
