import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  ThumbnailImage,
  VideoContainer,
  ChannelImage,
  Title,
  ChannelName,
  Views,
  Duration,
  VideoDetailsContainer,
  VideoMatterContainer,
  ViewsAndPost,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewCount,
  } = videoDetails

  const dataDistance = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`videos/${id}`} className="link-elements">
            <VideoContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoMatterContainer>
                  <Title dark={isDark}>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndPost>
                    <Views>{`${viewCount} views`}</Views>
                    <Duration>{publishedAt}</Duration>
                  </ViewsAndPost>
                </VideoMatterContainer>
              </VideoDetailsContainer>
            </VideoContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
