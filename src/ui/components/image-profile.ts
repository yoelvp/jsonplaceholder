import { styled } from 'styled-components'
import { Color, Size } from '../types'

export const ImageProfile = styled.div<{
  $size?: Size,
  $background?: Color,
  $color?: Color,
  $rounded?: Size,
  $fontSize?: string
}>`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ $fontSize }) => $fontSize ? `${$fontSize}px` : '1rem'};
  background: ${({ theme, $background }) => {
    switch ($background) {
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
      case 'dark':
        return theme.colors.dark
      default:
        return theme.colors.primary
    }
  }};
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
      case 'dark':
        return theme.colors.dark
      default:
        return theme.colors.white
    }
  }};
`
