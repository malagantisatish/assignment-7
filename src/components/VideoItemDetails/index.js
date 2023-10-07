import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'

import Header from '../Header'
import Menu from '../Menu'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoPlayerDetailsContainer,
  VideoContainer,
  LikeButton,
  LikeSaveContainer,
  Title,
  Views,
  VideoViewsLikesContainer,
  PublishedAt,
  ViewsContainer,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelDetails,
  Subscribers,
  ChannelName,
  Description,
  LoaderContainer,
  DisLikeButton,
  SaveButton,
  FailureDescription,
  FailureHeading,
  FailureImage,
  FailureViewContainer,
  TryAgainButton,
  ButtonText,
} from './styledComponents'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProcess: 'PROCESS',
  success: 'SUCCESS',
  failure: 'FAIL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: [],
    channelDetails: [],
    status: apiStatus.initial,
    isLiked: false,
    disLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getTheVideoData()
  }

  getTheChannelData = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    subscriberCount: data.subscriber_count,
  })

  getTheFormattedData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    description: data.description,
    videoUrl: data.video_url,
    publishedAt: data.published_at,
    viewCount: data.view_count,
    channel: this.getTheChannelData(data.channel),
  })

  getTheVideoData = async () => {
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const formattedData = this.getTheFormattedData(data.video_details)
      console.log(formattedData)
      this.setState({
        videoDetails: formattedData,
        channelDetails: formattedData.channel,
        status: apiStatus.success,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  likeTheVideo = () => {
    const {disLiked} = this.state
    if (disLiked) {
      this.setState(prevState => ({disLiked: !prevState.disLiked}))
    }
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  disLikeTheVideo = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState(prevState => ({isLiked: !prevState.isLiked}))
    }
    this.setState(prevState => ({disLiked: !prevState.disLiked}))
  }

  ChangeTheSavebtn = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderTheLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderContainer>
  )

  render() {
    const {
      videoDetails,
      channelDetails,
      isLiked,
      disLiked,
      status,
      isSaved,
    } = this.state
    const savedText = isSaved ? 'Saved' : 'Save'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedList, isDark, addToSavedList} = value
          const savedListIds = savedList.map(each => each.id)
          const saveTheVideo = () => {
            this.ChangeTheSavebtn()
            if (!savedListIds.includes(videoDetails.id)) {
              addToSavedList(videoDetails)
            }
          }

          const renderTheFailureView = () => {
            const darkFailureImage =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            const lightFailureImage =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            const failureImage = isDark ? darkFailureImage : lightFailureImage
            return (
              <FailureViewContainer dark={isDark}>
                <FailureImage src={failureImage} alt="failure view" />
                <FailureHeading dark={isDark}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription dark={isDark}>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureDescription>
                <TryAgainButton type="button" onClick={this.getTheVideoData}>
                  Retry
                </TryAgainButton>
              </FailureViewContainer>
            )
          }

          const renderTheVideoPlayerView = () => {
            const publishedDate = formatDistanceToNow(
              new Date(videoDetails.publishedAt),
            )

            return (
              <VideoContainer>
                <ReactPlayer
                  className="video-item-video-player"
                  url={videoDetails.videoUrl}
                  controls
                  width="95%"
                  height={400}
                />
                <Title dark={isDark}>{videoDetails.title}</Title>
                <VideoViewsLikesContainer>
                  <ViewsContainer>
                    <Views dark={isDark}>{videoDetails.viewCount}</Views>
                    <PublishedAt dark={isDark}>{publishedDate}</PublishedAt>
                  </ViewsContainer>
                  <LikeSaveContainer>
                    <LikeButton
                      type="button"
                      onClick={this.likeTheVideo}
                      active={isLiked}
                      dark={isDark}
                    >
                      <AiOutlineLike size={35} />
                      <ButtonText active={isLiked}>Like</ButtonText>
                    </LikeButton>

                    <DisLikeButton
                      type="button"
                      onClick={this.disLikeTheVideo}
                      active={disLiked}
                      dark={isDark}
                    >
                      <AiOutlineDislike size={35} />
                      <ButtonText active={disLiked}>Dislike</ButtonText>
                    </DisLikeButton>
                    <SaveButton
                      type="button"
                      onClick={saveTheVideo}
                      dark={isDark}
                      active={isSaved}
                    >
                      <FiBookmark size={35} />
                      <ButtonText active={isSaved}>{savedText}</ButtonText>
                    </SaveButton>
                  </LikeSaveContainer>
                </VideoViewsLikesContainer>
                <HorizontalLine />
                <ChannelContainer>
                  <ChannelLogo src={channelDetails.profileImageUrl} alt="" />
                  <ChannelDetails>
                    <ChannelName dark={isDark}>
                      {channelDetails.name}
                    </ChannelName>
                    <Subscribers
                      dark={isDark}
                    >{`${channelDetails.subscriberCount} subscribers`}</Subscribers>
                    <Description dark={isDark}>
                      {videoDetails.description}
                    </Description>
                  </ChannelDetails>
                </ChannelContainer>
              </VideoContainer>
            )
          }

          const renderTheVideoItemDetailsView = () => {
            switch (status) {
              case apiStatus.inProcess:
                return this.renderTheLoader()
              case apiStatus.success:
                return renderTheVideoPlayerView()
              case apiStatus.failure:
                return renderTheFailureView()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <VideoPlayerDetailsContainer
                dark={isDark}
                data-testid="videoItemDetails"
              >
                <Menu />
                {renderTheVideoItemDetailsView()}
              </VideoPlayerDetailsContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
