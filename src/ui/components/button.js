import styled from 'styled-components'
import { rounded } from '../assets/utils'

export const Button = styled.button`
  border: none;
  padding: 4px;
  border-radius: ${rounded.sm};
  cursor: pointer;
  display: grid;
  place-content: center;
  font-size: ${props => props.size ? props.size : '1.25rem'};
`
