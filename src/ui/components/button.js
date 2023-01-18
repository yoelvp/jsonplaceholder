import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color, rounded } from '../assets/utils'

export const Button = styled.button`
  border: none;
  padding: 4px;
  border-radius: ${rounded.sm};
  cursor: pointer;
  display: grid;
  place-content: center;
  font-size: ${props => props.size ? props.size : '1.25rem'};
`

export const ButtonLink = styled(Link)`
  font-size: 1.5rem;
  background-color: ${color.skyBlue};
  display: grid;
  place-content: center;
  padding: 4px;
  border-radius: ${rounded.sm};
`
