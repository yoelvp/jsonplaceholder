import styled from 'styled-components'
import { color } from '../assets/utils'

export const DialogWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 50vh;
  background-color: ${props => props.background ? props.background : color.darkSecondary};
  opacity: 0.95;
  backdrop-filter: blur(2px);
  overflow-y: scroll;
  padding-bottom: 1rem;
`

export const DialogHeader = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.white};
  border-bottom-style: dotted;
  padding: 1rem;
`

export const DialogContent = styled.div`
  padding: 1rem;
`
