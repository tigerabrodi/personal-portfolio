import styled, { css, keyframes } from "styled-components";
import NarutoFaceSVG from "../../assets/naruto-face.svg";
import { media } from "../../theme/media";
import { focusStyles, secondFocusStyles } from "../../theme/sharedStyles";
import { theme } from "../../theme/theme";

const fadeUp = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const NavigationWrapper = styled.nav<{ shouldShowShadow: boolean }>`
  width: 100%;
  flex: 0 0 70px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.DarkBrown};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  ${(props) =>
    props.shouldShowShadow &&
    css`
      box-shadow: 0 3px 2px black;
    `};
  ${media.custom(410)} {
    flex: 0 0 8rem;
  }
  ${media.tablet} {
    flex: 0 0 11rem;
    padding: 0 20px;
  }
  ${media.desktop} {
    padding: 0 30px;
  }
`;

export const NavigationTabletWrapper = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 100%;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${theme.Orange};
  font-family: ${theme.Oxanium};
  font-weight: 700;
  font-size: 2.5rem;
  text-shadow: 0 0.1rem hsl(18, 21%, 23%), 0 0.2rem hsl(18, 21%, 23%),
    0 0.3rem hsl(18, 21%, 23%), 0 0 10px #f72405ba;
  ${focusStyles};
  ${media.tablet} {
    font-size: 3.5rem;
  }
  ${media.laptop} {
    font-size: 3.8rem;
  }
`;

export const NarutoFace = styled(NarutoFaceSVG)`
  height: 4.2rem;
  width: 4.2rem;
  filter: drop-shadow(0 0 1px ${theme.Red});
  ${media.tablet} {
    width: 55px;
    height: 55px;
    position: relative;
  }
  ${media.desktop} {
    height: 60px;
    width: 60px;
  }
`;

export const IconsWrapper = styled.div`
  position: fixed;
  z-index: 10;
  height: 160px;
  width: 20px;
  bottom: 0;
  right: 0;
  margin: auto 0;
  top: -7%;
  left: 7px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.custom(360)} {
    height: 200px;
    left: 8.5px;
  }
  ${media.custom(375)} {
    height: 220px;
    top: -10%;
  }
  ${media.custom(410)} {
    left: 10px;
    top: -10%;
    height: 260px;
  }
  ${media.tablet} {
    height: 400px;
    left: 18px;
    top: -2%;
  }
  ${media.desktop} {
    height: 450px;
    left: 22px;
    top: -3%;
  }
  ${media.laptop} {
    left: 25px;
  }
`;

export const IconLink = styled.a`
  width: 2rem;
  height: 2rem;
  color: ${theme.Orange};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  ${media.custom(410)} {
    width: 2.4rem;
    height: 2.4rem;
  }
  &:nth-of-type(1) {
    ${media.noReducedMotion} {
      animation: ${fadeUp} 0.3s 1.2s both ease-out;
    }
  }

  &:nth-of-type(2) {
    ${media.noReducedMotion} {
      animation: ${fadeUp} 0.3s 1.3s both ease-out;
    }
  }

  &:nth-of-type(3) {
    ${media.noReducedMotion} {
      animation: ${fadeUp} 0.3s 1.5s both ease-out;
    }
  }

  &:nth-of-type(4) {
    ${media.noReducedMotion} {
      animation: ${fadeUp} 0.3s 1.6s both ease-out;
    }
  }
  .icon {
    width: 80%;
    height: 80%;
    transition: all 0.2s ease-in-out;
    fill: currentColor;
    path {
      fill: currentColor;
      transition: all 0.2s ease-in-out;
    }
  }
  ${focusStyles}
  ${media.tablet} {
    width: 33px;
    height: 33px;
    transition: color 0.2s ease-in-out;
    will-change: transform;
    &:hover {
      .icon {
        transition: all 0.2s ease-in-out;
        transform: translateY(-3px);
      }

      path {
        transition: all 0.15s ease-in-out;
        fill: ${theme.Pink};
      }
    }
    &:active {
      .icon {
        transition: all 0.1s ease-in-out;
        transform: scale(0.95) translateY(-3px);
      }
    }
  }
`;

export const MobileNavigationWrapper = styled.div`
  width: 100%;
  z-index: 10;
  height: 8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid ${theme.Orange};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 -0.5rem 1rem black;
  background-color: ${theme.DarkBrown};
  opacity: 1;
  ${media.custom(410)} {
    height: 9rem;
  }
  ${media.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 5.5rem;
  width: 7.5rem;
  color: ${theme.Pink};
  ${secondFocusStyles}
  .icon-nav {
    width: 2.2rem;
    height: 2.2rem;
    fill: currentColor;
    transition: all 0.2s;
    path {
      transition: all 0.2s;
    }
    ${media.tablet} {
      width: 3rem;
      height: 3rem;
    }
  }
  ${media.tablet} {
    display: inline-block;
    position: relative;
    height: auto;
    width: auto;
    font-size: 2.2rem;
    font-family: ${theme.Oxanium};
    font-weight: 500;
    transition: transform 0.3s ease-out;
    will-change: transform;
    transform-origin: top left;
    ${focusStyles};
    ${media.desktop} {
      font-size: 2.4rem;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      transform-origin: left;
      width: 102%;
      height: 110%;
      background-color: #f72405ba;
      transform: scaleX(0) translateX(-0.3rem);
      border-radius: 2px;
      transition: transform 0.3s ease-out;
      z-index: -5;
    }
    &:hover {
      transform: scale(1.02);
      transition: transform 0.2s ease-out;
      &::after {
        transform: scaleX(1) translateX(-0.1rem) rotate(-1deg);
        transition: transform 0.2s ease-out;
      }
    }
    &:active {
      transform: scale(0.97);
      transition: transform 0.1s ease-out;
    }
  }
`;

export const LinkText = styled.span`
  font-family: ${theme.Oxanium};
  font-weight: 500;
  font-size: 1.4rem;
  color: ${theme.Orange};
  ${media.tablet} {
    font-weight: 600;
    transition: all 0.2s;
    font-size: 2rem;
  }
  ${media.desktop} {
    font-size: 2.4rem;
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  left: -99rem;
  width: 0.1rem;
  height: 0.1rem;
  top: auto;
  text-decoration: underline;

  &:focus {
    position: absolute;
    top: 16%;
    left: 3%;
    width: 18rem;
    height: 5rem;
    color: ${theme.Orange};
    background-color: ${theme.DarkBrown};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: ${theme.Montserrat};
    font-weight: 500;
    box-shadow: 0 0.2rem 0.2rem black;
    outline: 0.2rem ridge ${theme.Orange};
    ${media.tablet} {
      width: 22rem;
      height: 6rem;
      font-size: 1.8rem;
      left: 2%;
    }
    ${media.laptop} {
      width: 24rem;
    }
  }
`;

export const IntersectingElement = styled.div`
  height: 0.2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  visibility: hidden;
  z-index: -1000;
`;
