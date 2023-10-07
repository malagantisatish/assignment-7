import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const darkImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      const lightImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const imageUrl = isDark ? darkImage : lightImage
      return (
        <FailureViewContainer dark={isDark}>
          <FailureImage src={imageUrl} alt="not found" />
          <FailureHeading dark={isDark}>Page Not Found</FailureHeading>
          <FailureDescription dark={isDark}>
            we are sorry, the page you requested could not be found.
          </FailureDescription>
        </FailureViewContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
