import styled from 'styled-components'

export const VideoPlayerDetailsContainer = styled.div`
  width: 100vw;
  display: flex;
  background-color: ${props => (props.dark ? '#0f0f0f ' : '#f9f9f9')};
`

export const LikeButton = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0px;
  align-items: center;
  color: ${props => (props.active ? '#2563eb ' : '#64748b')};
`
export const DisLikeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.active ? '#2563eb ' : '#64748b')};
`

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.active ? '#2563eb ' : '#64748b')};
`

export const LikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoViewsLikesContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: #94a3b8;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: #94a3b8;
`

export const VideoContainer = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const ViewsContainer = styled.div`
  display: flex;
`
export const HorizontalLine = styled.hr`
  width: 95%;
`

//  ChannelContainer,  ChannelLogo,  ChannelDetails,  Subscribers,  ChannelName,  Description

export const ChannelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  align-self: flex-start;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const Subscribers = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: #94a3b8;
`
export const LoaderContainer = styled.div`
  width: 80%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  padding-left: 10px;
  color: #94a3b8;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  padding-left: 10px;
  color: ${props => (props.dark ? 'white' : 'black')};
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

export const ButtonText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.active ? '#2563eb ' : '#64748b')};
  padding: 10px;
`
