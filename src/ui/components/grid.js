import styled from 'styled-components'
// import { color, rounded } from '../assets/utils'

export const Grid = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(${props => props.templateColumns ? props.templateColumns : '1'}, 1fr);
  gap: ${props => props.gap ? props.gap : '1rem'};
`
