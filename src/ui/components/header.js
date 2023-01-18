import styled from 'styled-components'
import { color, rounded } from '../assets/utils'

export const Navbar = styled.header`
  background-color: ${color.skyBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`

export const Menu = styled.div`
  position: absolute;
  top: 25px;
  right: 20px;
  background-color: ${color.skyBlue};
  border: 2px solid ${color.dark};
  border-radius: ${rounded.sm};
  padding: 1rem;
`
