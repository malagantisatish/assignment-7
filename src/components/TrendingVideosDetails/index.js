import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoContainer,
  VideoImage,
  Title,
  ChannelName,
  Views,
  PublishedDate,
  VideoDetails,
  ViewsAndDate,
} from './styledComponents'

const TrendingVideosDetails = props => {
  const {videoDetails} = props
  const {
    title,
    channel,
    thumbnailUrl,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const publishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link-elements">
            <VideoContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <Title dark={isDark}>{title}</Title>
                <ChannelName dark={isDark}>{channel.name}</ChannelName>
                <ViewsAndDate>
                  <Views dark={isDark}>{viewCount}</Views>
                  <PublishedDate dark={isDark}>{publishedDate}</PublishedDate>
                </ViewsAndDate>
              </VideoDetails>
            </VideoContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideosDetails
