import {Component} from 'react'
import {FiBookmark} from 'react-icons/fi'
import Header from '../Header'
import Menu from '../Menu'
import TrendingVideoDetails from '../TrendingVideosDetails'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedVideosContainer,
  SavedHeading,
  SavedHeader,
  SavedVideosList,
  SavedLogo,
  SavedVideosRoute,
  NoSavedDescription,
  NoSavedHeading,
  NoSavedVideosContainer,
  NoVideosImage,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedList, isDark, addToSavedList} = value
          const savedListLength = savedList.length

          const renderTheSavedListView = () => (
            <SavedVideosContainer>
              <SavedHeader dark={isDark} data-testid="banner">
                <SavedLogo>
                  <FiBookmark size={40} />
                </SavedLogo>
                <SavedHeading dark={isDark}>Trending</SavedHeading>
              </SavedHeader>
              <SavedVideosList>
                {savedList.map(each => (
                  <TrendingVideoDetails key={each.id} videoDetails={each} />
                ))}
              </SavedVideosList>
            </SavedVideosContainer>
          )

          const renderTheNoSavedVideosView = () => (
            <NoSavedVideosContainer dark={isDark}>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeading dark={isDark}>
                No saved videos found
              </NoSavedHeading>
              <NoSavedDescription dark={isDark}>
                Save your videos by clicking a button
              </NoSavedDescription>
            </NoSavedVideosContainer>
          )

          return (
            <>
              <Header />
              <SavedVideosRoute dark={isDark} data-testid="savedVideos">
                <Menu />
                {savedListLength > 0
                  ? renderTheSavedListView()
                  : renderTheNoSavedVideosView()}
              </SavedVideosRoute>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
