import { styled } from 'styled-components'

export const Flex = styled.div<{
  $justifyContent?: string,
  $alignItems?: string,
  $gap?: string
}>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ $gap }) => $gap ? `${$gap}px` : '1rem'};
`
