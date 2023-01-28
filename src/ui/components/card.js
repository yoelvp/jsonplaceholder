import styled, { css } from 'styled-components'
import { color, rounded } from '../assets/utils'

export const Card = styled.section`
  width: 100%;
  border-radius: ${rounded.sm};
  padding: 1rem;
  background-color: ${props => {
    switch (props.background) {
      case 'primary':
        return color.skyBlue

      case 'secondary':
        return color.skyBlueSecondary

      default:
        return color.white
    }
  }};
  ${props => props.marginBottom && css`
    margin-bottom: ${props.marginBottom};
  `}
  ${props => props.cursor && css`
    cursor: ${props.cursor};
  `}

  &:hover {
    opacity: 0.8;
  }
`

export const CardContent = styled.article`
padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.borderColor ? props.borderColor : color.white};
`

export const CardFooter = styled.div`
  padding-top: 1rem;
`
