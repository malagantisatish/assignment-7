import styled from 'styled-components'

export const SavedVideosRoute = styled.div`
  width: 100vw;
  display: flex;
  margin-top: 2px;
  background-color: ${props => (props.dark ? '#0f0f0f ' : ' #f9f9f9')};
`

export const SavedVideosContainer = styled.div`
  width: 80%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const SavedHeader = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${props => (props.dark ? '#383838' : ' #f1f5f9')};
  height: 80px;
  align-items: center;
  padding: 10px;
`
export const SavedLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
`

export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  padding-left: 10px;
  color: ${props => (props.dark ? '#f8fafc' : ' black')};
`

export const SavedVideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const NoSavedVideosContainer = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => (props.dark ? '#f8fafc' : ' black')};
`

export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  color: ${props => (props.dark ? ' #f8fafc' : 'black')};
`

export const NoSavedDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.dark ? '#e2e8f0' : '#475569')};
`

export const NoVideosImage = styled.img`
  height: 50%;
`
