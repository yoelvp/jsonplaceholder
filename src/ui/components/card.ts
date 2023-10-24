import { styled } from "styled-components";
import { Color, Size } from "../types";

export const Card = styled.div<{
  $background?: Color,
  $rounded?: Size
}>`
  width: 100%;
  padding: 1rem;
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
      default:
        return theme.colors.primary
    }
  }};
`
