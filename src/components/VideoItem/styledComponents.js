import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex-shrink: 0;
  @media (max-width: 576px) {
    width: 90%;
  }
`

export const ThumbnailImage = styled.img`
  width: 99%;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  color:${props => (props.dark ? 'white' : 'black')}
  padding: 0px;
`

export const ChannelName = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #94a3b8;
  padding: 0px;
`

export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-self: flex-start;
  margin: 10px;
`

export const Views = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #94a3b8;
`

export const Duration = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #94a3b8;
  padding: 0px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const VideoMatterContainer = styled.div`
  padding: 0px;
`

export const ViewsAndPost = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`
