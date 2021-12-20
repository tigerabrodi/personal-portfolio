import styled from 'styled-components'
import HeartSVG from '../../assets/heart.svg'
import ExternalSVG from '../../assets/external.svg'
import { theme } from '../../theme/theme'
import { media } from '../../theme/media'
import { focusStyles } from '../../theme/sharedStyles'

export const FooterWrapper = styled.footer`
  height: 13rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  ${media.custom(410)} {
    height: 14rem;
  }
  ${media.tablet} {
    align-items: center;
    margin-top: 100px;
  }
  ${media.desktop} {
    height: 17rem;
  }
`

export const FooterText = styled.p`
  font-family: ${theme.Oxanium};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${theme.Orange};
  display: flex;
  align-items: center;
  ${media.tablet} {
    font-size: 2.3rem;
  }
`

export const Heart = styled(HeartSVG)`
  height: 2rem;
  width: 2rem;
  margin: 0 5px;
  ${media.tablet} {
    width: 4rem;
    height: 4rem;
    margin: 0 7.5px;
  }
`

export const FooterLink = styled.a`
  color: ${theme.Pink};
  position: relative;
  text-decoration: underline;
  margin-left: 5px;
  ${focusStyles}
  ${media.tablet} {
    margin-left: 7.5px;
  }
`

export const External = styled(ExternalSVG)`
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  right: 0;
  top: -1.3rem;
  left: 7.6rem;
  fill: ${theme.Pink};
  ${media.tablet} {
    height: 2rem;
    width: 2rem;
    top: -2.2rem;
    left: 12.6rem;
  }
`
