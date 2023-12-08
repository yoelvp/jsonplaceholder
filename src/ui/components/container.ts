import { styled } from 'styled-components'

export const Container = styled.div<{
  padding?: string
}>`
  width: 90%;
  height: calc(100vh - 32px);
  margin: 1rem auto;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }
`
