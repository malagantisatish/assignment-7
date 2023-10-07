import styled from 'styled-components'

export const GamingContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 2px;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9 ')};
`

export const GamingVideosContainer = styled.div`
  width: 80%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const GamingHeader = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${props => (props.dark ? '#424242' : '#e2e8f0')};
  height: 80px;
  align-items: center;
  padding: 10px;
`
export const GamingLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
`

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const GamingVideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Gaming = styled.div`
  width: 100vh;
  display: flex;
`

export const LoaderContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

//  FailureDescription,FailureHeading,FailureImage,FailureViewContainer,TryAgainButton

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  padding-left: 10px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  padding-left: 10px;
`

export const FailureImage = styled.img`
  height: 50%;
`

export const FailureViewContainer = styled.div`
width:80%
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const TryAgainButton = styled.button`
  height: 50px;
  width: 120px;
  border-width: 0px;
  color: white;
  background-color: #3b82f6;
`
