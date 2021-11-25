import * as React from "react";
import Link from "next/link";
import GithubSVG from "../../assets/github.svg";
import PenSVG from "../../assets/pen.svg";
import HammerSVG from "../../assets/hammer.svg";
import FaceSVG from "../../assets/face.svg";
import TimelineSVG from "../../assets/timeline.svg";
import MailSVG from "../../assets/mail.svg";
import {
  LogoLink,
  NarutoFace,
  NavigationWrapper,
  IconsWrapper,
  IconLink,
  MobileNavigationWrapper,
  NavLink,
  LinkText,
  SkipLink,
  IntersectingElement,
  NavigationTabletWrapper,
} from "./styles";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useMedia } from "../../hooks/useMedia";
import { LinkedInIcon } from "../../icons/LinkedIn";
import { TwitterIcon } from "../../icons/Twitter";

type MainRefProps = {
  mainRef: React.MutableRefObject<HTMLElement | null>;
};

type Ids = "about" | "experience" | "projects" | "contact";

export const Navigation = ({ mainRef }: MainRefProps) => {
  const { isVisible, setIntersectingElement } = useOnScreen();
  const isTabletLayout = useMedia("min", "768");

  const focusOnSection = (id: Ids) => {
    const focusTarget = document.querySelector(`#${id}`) as HTMLElement;
    focusTarget.focus();
  };

  return (
    <>
      <IntersectingElement ref={setIntersectingElement} />
      <NavigationWrapper shouldShowShadow={!isVisible}>
        <Link href="#main" passHref>
          <SkipLink onClick={() => mainRef.current?.focus()}>
            Skip To Main Content
          </SkipLink>
        </Link>
        <Link href="/" passHref>
          <LogoLink aria-label="To top">Tiger Abrodi</LogoLink>
        </Link>
        {isTabletLayout && (
          <NavigationTabletWrapper>
            <Link href="#about" passHref>
              <NavLink onClick={() => focusOnSection("about")}>About.</NavLink>
            </Link>
            <Link href="#experience" passHref>
              <NavLink onClick={() => focusOnSection("experience")}>
                Experience.
              </NavLink>
            </Link>
            <Link href="#projects" passHref>
              <NavLink onClick={() => focusOnSection("projects")}>
                Projects.
              </NavLink>
            </Link>
            <Link href="#contact" passHref>
              <NavLink onClick={() => focusOnSection("contact")}>
                Contact.
              </NavLink>
            </Link>
          </NavigationTabletWrapper>
        )}
        <NarutoFace aria-hidden="true" />
        <IconsWrapper>
          <Link
            href="https://www.linkedin.com/in/tiger-abrodi-467695195/"
            passHref
          >
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linked In Profile"
            >
              <LinkedInIcon />
            </IconLink>
          </Link>
          <Link href="https://twitter.com/TAbrodi" passHref>
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <TwitterIcon />
            </IconLink>
          </Link>
          <Link href="https://github.com/tigerabrodi" passHref>
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Profile"
            >
              <GithubSVG aria-hidden="true" />
            </IconLink>
          </Link>
          <Link href="https://tigerabrodi.hashnode.dev/" passHref>
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My software engineering blog"
            >
              <PenSVG aria-hidden="true" />
            </IconLink>
          </Link>
        </IconsWrapper>
        <MobileNavigationWrapper>
          <Link href="#about" passHref>
            <NavLink>
              <FaceSVG aria-hidden="true" />
              <LinkText>About</LinkText>
            </NavLink>
          </Link>
          <Link href="#experience" passHref>
            <NavLink>
              <TimelineSVG aria-hidden="true" />
              <LinkText>Experience</LinkText>
            </NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink>
              <HammerSVG aria-hidden="true" />
              <LinkText>Projects</LinkText>
            </NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink>
              <MailSVG aria-hidden="true" />
              <LinkText>Contact</LinkText>
            </NavLink>
          </Link>
        </MobileNavigationWrapper>
      </NavigationWrapper>
    </>
  );
};
