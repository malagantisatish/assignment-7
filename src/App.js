import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomePage from './components/HomePage'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const getTheIsDark = () => {
  const isDarkOrNot = localStorage.getItem('isDark')
  if (isDarkOrNot === null) {
    return false
  }
  return JSON.parse(isDarkOrNot)
}

class App extends Component {
  state = {isDark: false, savedList: []}

  updateTheThemeInLocalStorage = () => {
    const {isDark} = this.state
    localStorage.setItem('isDark', JSON.stringify(isDark))
  }

  toggleTheTheme = () => {
    this.setState(
      prevState => ({isDark: !prevState.isDark}),
      this.updateTheThemeInLocalStorage,
    )
  }

  addToSavedList = videoItem => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, videoItem],
    }))
  }

  render() {
    const {isDark, savedList} = this.state
    console.log(savedList)
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          savedList,
          addToSavedList: this.addToSavedList,
          toggleTheTheme: this.toggleTheTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
