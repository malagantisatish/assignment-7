import styled from 'styled-components'

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
  color: ${props => (props.dark ? '#94a3b8' : 'black')};
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;

  padding-left: 10px;
  color: ${props => (props.dark ? '#94a3b8' : 'black')};
`

export const FailureImage = styled.img`
  height: 400px;
`

export const FailureViewContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
