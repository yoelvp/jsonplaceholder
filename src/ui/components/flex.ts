import { styled } from "styled-components";

export const Flex = styled.div<{
  justifyContent?: string,
  alignItems?: string
}>`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
