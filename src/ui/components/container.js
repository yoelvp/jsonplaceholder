import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
  gap: ${props => props.gap ? props.gap : '1rem'};
  width: 100%;
  overflow-y: scroll;
`
