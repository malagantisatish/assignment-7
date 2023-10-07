import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'

import Header from '../Header'
import Menu from '../Menu'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeBgContainer,
  HomePageVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosListContainer,
  LoaderContainer,
  FailureDescription,
  FailureHeading,
  FailureImage,
  FailureViewContainer,
  TryAgainButton,
  AdvertisementContainer,
  Description,
  LogoImage,
  GetItButton,
  LogoCancel,
  CancelButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProcess: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAIL',
}

class HomePage extends Component {
  state = {
    searchInput: '',
    videosData: [],
    status: apiStatus.initial,
    showAdvertisement: true,
  }

  componentDidMount() {
    this.getTheVideosData()
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

  getTheVideosData = async () => {
    const token = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    }

    this.setState({status: apiStatus.inProcess})

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const formattedData = data.videos.map(each => this.getFormattedData(each))
      console.log(formattedData)
      this.setState({videosData: formattedData, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  getTheSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  removeAdvertisement = () => {
    this.setState({showAdvertisement: false})
  }

  renderTheVideosList = () => {
    const {videosData} = this.state
    return (
      <VideosListContainer>
        {videosData.map(each => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </VideosListContainer>
    )
  }

  renderTheAdvertisement = () => (
    <AdvertisementContainer data-testid="banner">
      <LogoCancel>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CancelButton onClick={this.removeAdvertisement} data-testid="close">
          <MdCancel size={25} />
        </CancelButton>
      </LogoCancel>
      <Description>Buy Nxt Watch Premium prepaid plans with UPI</Description>
      <GetItButton type="button">GET IT NOW</GetItButton>
    </AdvertisementContainer>
  )

  renderTheLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  render() {
    const {videosData, status, showAdvertisement, searchInput} = this.state
    const lengthOfVideoList = videosData.length
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          const renderTheNoVideosFound = () => (
            <FailureViewContainer dark={isDark}>
              <FailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHeading dark={isDark}>
                No Search results found
              </FailureHeading>
              <FailureDescription dark={isDark}>
                Try different key words or remove search filter
              </FailureDescription>
              <TryAgainButton type="button" onClick={this.getTheVideosData}>
                Try Again
              </TryAgainButton>
            </FailureViewContainer>
          )

          const renderTheSuccessView = () => (
            <HomePageVideosContainer dark={isDark}>
              {showAdvertisement && this.renderTheAdvertisement()}
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.getTheSearchInput}
                  dark={isDark}
                />
                <SearchButton
                  type="button"
                  dark={isDark}
                  onClick={this.getTheVideosData}
                  data-testid="searchButton"
                >
                  <BsSearch size={20} />
                </SearchButton>
              </SearchContainer>
              {lengthOfVideoList > 0
                ? this.renderTheVideosList()
                : renderTheNoVideosFound()}
            </HomePageVideosContainer>
          )

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
                  later.
                </FailureDescription>
                <TryAgainButton type="button" onClick={this.getTheVideosData}>
                  Try Again
                </TryAgainButton>
              </FailureViewContainer>
            )
          }

          const renderHomeVideosView = () => {
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
              <HomeBgContainer dark={isDark} data-testid="home">
                <Menu />
                {renderHomeVideosView()}
              </HomeBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomePage
