import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  margin-top: 2px;
`

export const HomePageVideosContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  padding-top: 30px;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 35%;
  height: 45px;
  padding: 10px;
  margin-left: 20px;
  color:${props => (props.dark ? 'white' : 'black')}
  background-color: ${props => (props.dark ? 'transparent' : 'white')};
  @media (max-width: 576px) {
    width: 90%;
  }
`

export const SearchButton = styled.button`
  height: 46px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #94a3b8;
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
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
//  AdvertisementContainer, Description, LogoImage, GetItButton,

export const AdvertisementContainer = styled.div`
  height: 35vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  width: 95%;
  align-self: center;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  padding-left: 10px;
`
export const LogoImage = styled.img`
  height: 30px;
`

export const GetItButton = styled.button`
  height: 40px;
  width: 120px;
`
export const LogoCancel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled.button`
  border-width: 0px;
  background-color: transparent;
`
