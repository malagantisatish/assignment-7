import styled from 'styled-components'

export const GameDetailsContainer = styled.li`
  width: 100%;
`

export const GameImage = styled.img`
  width: 90%;
  height: 300px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#d7dfe9' : '#383838')};
`
