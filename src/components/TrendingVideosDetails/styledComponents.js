import styled from 'styled-components'

//   VideoContainer, VideoImage,Title,  ChannelName,  Views,  PublishedDate,  VideoDetails,  ViewsAndDate,

export const VideoContainer = styled.li`
  display: flex;
  width: 90%;
  margin: 10px;
  @media (min-width: 576px) {
    width: 100%;
  }
`

export const VideoImage = styled.img`
  width: 60%;
  height: 400px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? ' #ebebeb' : 'black')};
  @media (max-width: 576px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? ' #ebebeb' : '#383838')};
  @media (max-width: 576px) {
    font-size: 14px;
    font-weight: 400;
  }
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? ' #ebebeb' : '#383838')};
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? ' #ebebeb' : '#383838')};
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const VideoDetails = styled.div`
  width: 40%;
`

export const ViewsAndDate = styled.div`
  display: flex;
`
