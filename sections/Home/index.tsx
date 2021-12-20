import Link from 'next/link'
import { TigerGraphic } from './TigerGraphic'
import {
  HomeDescription,
  HomeLink,
  HomeSection,
  HomeSubtitle,
  HomeTitle,
  HomeWrapper,
  DescriptionLink,
  LinkWrapper,
} from './styles'

export const Home = () => (
  <HomeSection>
    <HomeWrapper>
      <HomeTitle id="home">Hi, I&apos;m Tiger.</HomeTitle>
      <HomeSubtitle>I craft things for the web.</HomeSubtitle>
      <HomeDescription>
        I’m a Software Craftsman based in Germany who is heavily into
        Accessibility and Testing. I like building side projects,{' '}
        <Link href="https://tigerabrodi.hashnode.dev/" passHref>
          <DescriptionLink target="_blank" rel="noopener noreferrer">
            writing blog posts,
          </DescriptionLink>
        </Link>{' '}
        contributing to Open Source, volunteering in communities (KCD, OSRG,
        Testing Library, Mock Service Worker) and{' '}
        <Link
          href="https://www.goodreads.com/review/list/127384537-tiger-abrodi?ref=nav_mybooks&shelf=read"
          passHref
        >
          <DescriptionLink target="_blank" rel="noopener noreferrer">
            reading books.
          </DescriptionLink>
        </Link>{' '}
      </HomeDescription>
      <LinkWrapper>
        <Link href="mailto:tigerabrodi@gmail.com" passHref>
          <HomeLink>Get In Touch</HomeLink>
        </Link>
      </LinkWrapper>
    </HomeWrapper>
    <TigerGraphic />
  </HomeSection>
)
