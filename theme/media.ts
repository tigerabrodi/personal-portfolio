const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth / 16}rem)`

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1100),
  laptop: customMediaQuery(1550),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(425),
  noReducedMotion: `@media (prefers-reduced-motion: no-preference)`,
}
