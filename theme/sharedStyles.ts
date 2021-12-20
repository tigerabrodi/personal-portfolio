import { css } from 'styled-components'

export const focusStyles = css`
  &:focus-visible {
    outline: 0.2rem ridge #ffb123;
    outline-offset: 0.3rem;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`

export const secondFocusStyles = css`
  &:focus-visible {
    outline: 0.2rem ridge #ffb123;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`
