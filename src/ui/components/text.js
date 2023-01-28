import styled from 'styled-components'
import { color } from '../assets/utils'

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
  text-align: ${props => props.align ? props.align : 'center'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
`

export const Span = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  color: ${props => props.color ? props.color : color.white};
  opacity: ${props => props.opacity ? props.opacity : '1'};
`
