import { styled } from 'styled-components'
import { Color } from '../types'

export const Paragraph = styled.p<{
  color?: Color,
}>`
  color: ${({ theme, color}) => {
    switch (color) {
      case 'primary':
        return theme.colors.primary
      case 'secondary':
        return theme.colors.secondary
      case 'blue':
        return theme.colors.blue
      case 'green':
        return theme.colors.green
      case 'red':
        return theme.colors.red
      case 'yellow':
        return theme.colors.yellow
      default:
        return theme.colors.white
    }
  }}
`
