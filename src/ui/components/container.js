import styled, { css } from 'styled-components'
import { color, rounded } from '../assets/utils'

export const Container = styled.div`
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
  ${props => props.paddingX && css`
    padding: 0 ${props.paddingX} 0 ${props.paddingX};
  `}
  ${props => props.paddingY && css`
    padding: ${props.paddingY} 0 ${props.paddingY} 0;
  `}
  overflow-y: scroll;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
  width: 100%;
  ${props => props.gap && css`
    gap: ${props.gap};
  `}
  ${props => (props.marginBottom || props.mb) && css`
    margin-bottom: ${props.marginBottom || props.mb};
  `}
  ${props => props.padding && css`
    padding: ${props.padding};
  `}
  ${props => props.paddingX && css`
    padding: 0 ${props.paddingX} 0 ${props.paddingX};
  `}
  ${props => props.paddingY && css`
    padding: ${props.paddingY} 0 ${props.paddingY} 0;
  `}
`

export const Wrapper = styled.div`
  width: 95vw;
  height: 95vh;
  border-radius: ${rounded.sm};
  border: 2px solid ${color.white};
  overflow: scroll;

  @media screen and (min-width: 480px){
    width: 80vw;
    height: 95vh;
  }

  @media screen and (min-width: 680px){
    width: 60vw;
    height: 95vh;
  }

  @media screen and (min-width: 820px){
    width: 50vw;
    height: 95vh;
  }

  @media screen and (min-width: 1048px){
    width: 40vw;
    height: 95vh;
  }

  @media screen and (min-width: 1200px){
    width: 30vw;
    max-width: 30vw;
    height: 95vh;
  }
`
