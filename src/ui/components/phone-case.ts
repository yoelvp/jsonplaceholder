import type { Color } from '../types'

import { styled } from 'styled-components'

export const PhoneCase = styled.div<{
  $background?: Color
}>`
  width: 100%;
  height: 100%;
  border: 6px solid #CCCCCC;
  border-radius: ${({ theme }) => theme.rounded.large};
  padding: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme, $background }) => $background ? $background : theme.colors.dark}
`
