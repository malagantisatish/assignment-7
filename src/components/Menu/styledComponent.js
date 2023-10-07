import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 20%;
  min-height: 200vh;
  max-height: 400vh;
  text-decoration: normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.dark ? '#383838' : 'white')};
  @media (max-width: 576px) {
    display: none;
  }
`
export const MenuContainerOptions = styled.ul`
  list-style: none;
  text-decoration: normal;
`

export const Options = styled.li`
  display: flex;
  align-items: center;
  text-decoration: normal;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
`

export const Option = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
`

export const ContactDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
`

export const ContactHeading = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#e2e8f0' : 'black')};
`
export const SocialMediaList = styled.ul`
  list-style: none;
  display: flex;
`
export const SocialMediaImage = styled.img`
  height: 40px;
  margin: 5px;
`
export const DescriptionOfMedia = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#e2e8f0' : 'black')};
`
