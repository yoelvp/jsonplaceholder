import { css, styled } from 'styled-components'

export const Box = styled.div<{
  $paddingX?: string
  $paddingY?: string
  $paddingTop?: string
  $paddingRight?: string
  $paddingBottom?: string
  $paddingLeft?: string
  $marginX?: string
  $marginY?: string
  $marginTop?: string
  $marginRight?: string
  $marginBottom?: string
  $marginLeft?: string
}>`
  ${({ $paddingX }) => css`
    padding: 0 ${$paddingX}px 0 ${$paddingX}px;
  `}
  ${({ $paddingY }) => css`
    padding: ${$paddingY}px 0 ${$paddingY}px 0;
  `}
  ${({ $paddingTop }) => css`
    padding-top: ${$paddingTop}px;
  `}
  ${({ $paddingRight }) => css`
    padding-right: ${$paddingRight}px;
  `}
  ${({ $paddingBottom }) => css`
    padding-bottom: ${$paddingBottom}px;
  `}
  ${({ $paddingLeft }) => css`
    padding-left: ${$paddingLeft}px;
  `}
  ${({ $marginX }) => css`
    margin: 0 ${$marginX}px 0 ${$marginX}px;
  `}
  ${({ $marginY }) => css`
    margin: ${$marginY}px 0 ${$marginY}px 0;
  `}
  ${({ $marginTop }) => css`
    margin-top: ${$marginTop}px;
  `}
  ${({ $marginRight }) => css`
    margin-right: ${$marginRight}px;
  `}
  ${({ $marginBottom }) => css`
    margin-bottom: ${$marginBottom}px;
  `}
  ${({ $marginLeft }) => css`
    margin-left: ${$marginLeft}px;
  `}
`
