import { styled } from 'styled-components'

export const PhoneCase = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid #CCCCCC;
  border-radius: ${({ theme }) => theme.rounded.large};
  padding: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
`
