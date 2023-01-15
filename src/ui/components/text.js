import styled from 'styled-components'
import { color } from '../assets/utils'

export const Paragraph = styled.p`
  color: ${props => {
    switch (props.color) {
      case 'sky-blue':
        return color.skyBlue

      case 'dark':
        return color.dark

      default:
        return color.white
    }
  }};
  font-size: ${props => props.size ? props.size : '16px'};
  text-align: center;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
`

export const Heading = styled.h2`
  font-size: ${props => props.size ? props.size : '1.5rem'};
  color: ${props => {
    switch (props.color) {
      case 'sky-blue':
        return color.skyBlue

      case 'dark':
        return color.dark

      default:
        return color.white
    }
  }};
  text-align: center;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
`
