import type { Color, Size } from '../types'
import { styled } from 'styled-components'

export const Button = styled.button<{
  $size?: Size,
  $background?: Color,
  $rounded?: Size,
  $color?: Color
}>`
  border: none;
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
  border-radius: ${({ theme, $rounded }) => {
    switch ($rounded) {
      case 'small':
        return `${theme.rounded.small} ${theme.rounded.small}`
      case 'medium':
        return `${theme.rounded.medium} ${theme.rounded.medium}`
      case 'large':
        return `${theme.rounded.large} ${theme.rounded.large}`
      default:
        return `${theme.rounded.medium} ${theme.rounded.medium}`
    }
  }};
  padding: ${({ theme, $size }) => {
    switch ($size) {
      case 'small':
        return `${theme.sizes.small.y} ${theme.sizes.small.x}`
      case 'medium':
        return `${theme.sizes.medium.y} ${theme.sizes.medium.x}`
      case 'large':
        return `${theme.sizes.large.y} ${theme.sizes.large.x}`
      default:
        return `${theme.sizes.medium.y} ${theme.sizes.medium.x}`
    }
  }};
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    background: ${({ theme, $background }) => {
      switch ($background) {
        case 'primary':
          return `${theme.colors.primary}BF`
        case 'secondary':
          return `${theme.colors.secondary}BF`
        case 'blue':
          return `${theme.colors.blue}BF`
        case 'green':
          return `${theme.colors.green}BF`
        case 'red':
          return `${theme.colors.red}BF`
        case 'yellow':
          return `${theme.colors.yellow}BF`
        case 'dark':
          return `${theme.colors.dark}BF`
        default:
          return `${theme.colors.primary}BF`
      }
    }};
  }
`
