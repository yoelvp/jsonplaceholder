import styled from 'styled-components'
import { color, rounded } from '../assets/utils'

export const ModalWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0 0 0 / 0.5);
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  place-content: center;
`

export const ModalCard = styled.div`
  border-radius: ${rounded.sm};
  padding: 1rem;
  background-color: ${color.skyBlueSecondary};
`

export const ModalHeader = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`

export const ModalBody = styled.div``
