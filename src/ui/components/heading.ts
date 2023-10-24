import { styled } from 'styled-components'
import { Color } from '../types'

export const Heading = styled.h1<{
  $fontSize?: string,
  $color?: Color
}>`
  font-size: ${({ $fontSize }) => $fontSize ? `${$fontSize}px` : '1rem'};
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme, $color }) => {
    switch ($color) {
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
  }};
`
