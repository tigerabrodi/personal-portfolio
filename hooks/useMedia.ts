import { useState, useEffect } from 'react'

type Direction = 'max' | 'min'

export const useMedia = (direction: Direction, width: string) => {
  const [isLayout, setIsLayout] = useState(false)

  useEffect(() => {
    const checkLayout = () => {
      const isLayout = window.matchMedia(
        `(${direction}-width: ${width}px)`
      ).matches
      setIsLayout(isLayout)
    }

    checkLayout()
    window.addEventListener('resize', checkLayout)
    return () => {
      window.removeEventListener('resize', checkLayout)
    }
  }, [direction, width])

  return isLayout
}
