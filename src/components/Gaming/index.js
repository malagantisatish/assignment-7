import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Cookies from 'js-cookie'
import Header from '../Header'
import Menu from '../Menu'
import GamingVideosDetails from '../GamingVideosDetails'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingContainer,
  GamingHeader,
  GamingHeading,
  GamingVideosContainer,
  GamingLogo,
  GamingVideosList,
  LoaderContainer,
  FailureDescription,
  FailureHeading,
  FailureImage,
  FailureViewContainer,
  TryAgainButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProcess: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAIL',
}

class Gaming extends Component {
  state = {gamesData: [], status: apiStatus.initial}

  componentDidMount() {
    this.getTheGamesData()
  }

  getTheFormattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
    title: data.title,
  })

  getTheGamesData = async () => {
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    this.setState({status: apiStatus.inProcess})

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      // console.log(data)
      const formattedData = data.videos.map(each =>
        this.getTheFormattedData(each),
      )
      // console.log(formattedData)
      this.setState({gamesData: formattedData, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderTheGamingVideos = () => {
    const {gamesData} = this.state
    console.log(gamesData)
    return (
      <GamingVideosList>
        {gamesData.map(each => (
          <GamingVideosDetails key={each.id} videoDetails={each} />
        ))}
      </GamingVideosList>
    )
  }

  renderTheLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const renderTheSuccessView = () => {
            const {gamesData} = this.state
            console.log(gamesData)
            return (
              <GamingVideosContainer>
                <GamingHeader dark={isDark} data-testid="banner">
                  <GamingLogo>
                    <SiYoutubegaming size={40} />
                  </GamingLogo>
                  <GamingHeading dark={isDark}>Gaming</GamingHeading>
                </GamingHeader>
                {this.renderTheGamingVideos()}
              </GamingVideosContainer>
            )
          }

          const renderTheFailureView = () => {
            const lightFailure =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            const darkFailure =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            const image = isDark ? darkFailure : lightFailure
            return (
              <FailureViewContainer dark={isDark}>
                <FailureImage src={image} alt="failure view" />
                <FailureHeading dark={isDark}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription dark={isDark}>
                  We are having some trouble to complete your request.Please try
                  later
                </FailureDescription>
                <TryAgainButton type="button" onClick={this.getTheGamesData}>
                  Retry
                </TryAgainButton>
              </FailureViewContainer>
            )
          }

          const renderTheGamingPageView = () => {
            const {status} = this.state
            switch (status) {
              case apiStatus.inProcess:
                return this.renderTheLoader()
              case apiStatus.success:
                return renderTheSuccessView()
              case apiStatus.failure:
                return renderTheFailureView()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <GamingContainer dark={isDark} data-testid="gaming">
                <Menu />
                {renderTheGamingPageView()}
              </GamingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
