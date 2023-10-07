import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import Menu from '../Menu'
import TrendingVideosDetails from '../TrendingVideosDetails'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingContainer,
  TrendingVideosContainer,
  TrendingHeader,
  TrendingLogo,
  TrendingHeading,
  TrendingVideosList,
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

class Trending extends Component {
  state = {trendingData: [], status: apiStatus.initial}

  componentDidMount() {
    this.getTheTrendingData()
  }

  getTheChannelData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
  })

  getFormattedData = data => ({
    channel: this.getTheChannelData(data.channel),
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTheTrendingData = async () => {
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
      console.log(data)
      const formattedData = data.videos.map(each => this.getFormattedData(each))
      console.log(formattedData)
      this.setState({trendingData: formattedData, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderTheTrendingVideos = () => {
    const {trendingData} = this.state
    return (
      <TrendingVideosList>
        {trendingData.map(each => (
          <TrendingVideosDetails key={each.id} videoDetails={each} />
        ))}
      </TrendingVideosList>
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
            const {trendingData} = this.state
            return (
              <TrendingVideosContainer>
                <TrendingHeader dark={isDark} data-testid="banner">
                  <TrendingLogo>
                    <AiFillFire size={40} />
                  </TrendingLogo>
                  <TrendingHeading dark={isDark}>Trending</TrendingHeading>
                </TrendingHeader>
                {this.renderTheTrendingVideos()}
              </TrendingVideosContainer>
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
                <TryAgainButton type="button" onClick={this.getTheTrendingData}>
                  Retry
                </TryAgainButton>
              </FailureViewContainer>
            )
          }

          const renderTheTrendingVideosView = () => {
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
              <TrendingContainer dark={isDark} data-testid="trending">
                <Menu />
                {renderTheTrendingVideosView()}
              </TrendingContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
