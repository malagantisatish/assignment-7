import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {GameDetailsContainer, GameImage, Title, Views} from './styledComponents'

const GamingVideosDetails = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} className="link-element-games">
            <GameDetailsContainer>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <Title dark={isDark}>{title}</Title>
              <Views dark={isDark}>{`${viewCount} Watching Worldwide`}</Views>
            </GameDetailsContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideosDetails
