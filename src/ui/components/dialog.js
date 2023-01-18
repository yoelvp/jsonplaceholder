import styled from 'styled-components'
import { color, rounded } from '../assets/utils'

export const DialogWrapper = styled.div`
  position: fixed;
  bottom: 2.5vh;
  left: 50%;
  transform: translate(-50%, 0);
  height: 50vh;
  width: 95vw;
  background-color: ${props => props.background ? props.background : color.darkSecondary};
  opacity: 0.95;
  backdrop-filter: blur(2px);
  overflow-y: scroll;
  padding-bottom: 1rem;
  z-index: 1000;
  border-radius: 0 0 ${rounded.sm} ${rounded.sm};

  @media screen and (min-width: 480px){
    width: 80vw;
    height: 50vh;
  }

  @media screen and (min-width: 680px){
    width: 60vw;
    height: 50vh;
  }

  @media screen and (min-width: 820px){
    width: 50vw;
    height: 50vh;
  }

  @media screen and (min-width: 1048px){
    width: 40vw;
    height: 50vh;
  }

  @media screen and (min-width: 1200px){
    width: 30vw;
    max-width: 30vw;
    height: 50vh;
  }
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
