import { styled } from 'styled-components'

export const Grid = styled.div<{
  $columns?: string,
  $gap?: string
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 1}, 1fr);
  gap: ${({ $gap }) => $gap ? `${$gap}px` : '1rem'};
`
