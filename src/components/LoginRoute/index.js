import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Heading,
  BgContainer,
  LabelText,
  InputElement,
  Form,
  LoginCard,
  LogoImage,
  Checkbox,
  ShowPassword,
  ShowPasswordContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
    showPassword: false,
  }

  getThePassword = event => {
    this.setState({password: event.target.value})
  }

  getTheUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({errorMsg: error, isError: true})
  }

  toggleThePassowrd = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  submitTheUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const data = JSON.stringify(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: data,
    }
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(result.jwt_token)
    } else {
      this.onSubmitFailure(result.error_msg)
    }
  }

  render() {
    const {username, password, isError, errorMsg, showPassword} = this.state
    const TypeForShowPassword = showPassword ? 'text' : 'password'
    const token = Cookies.get('jwt_token')
    const darkLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    const lightLogo =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          const logoImage = isDark ? darkLogo : lightLogo
          return (
            <BgContainer dark={isDark}>
              <LoginCard dark={isDark}>
                <LogoImage src={logoImage} alt="website logo" />
                <Form onSubmit={this.submitTheUserDetails}>
                  <LabelText htmlFor="username" dark={isDark}>
                    USERNAME
                  </LabelText>
                  <br />
                  <InputElement
                    id="username"
                    type="text"
                    placeholder="username"
                    onChange={this.getTheUsername}
                    value={username}
                  />
                  <br />
                  <LabelText htmlFor="password" dark={isDark}>
                    PASSWORD
                  </LabelText>
                  <br />
                  <InputElement
                    id="password"
                    type={TypeForShowPassword}
                    placeholder="Password"
                    onChange={this.getThePassword}
                    value={password}
                  />
                  <br />
                  <ShowPasswordContainer>
                    <Checkbox
                      type="checkbox"
                      id="showPassword"
                      onClick={this.toggleThePassowrd}
                    />

                    <ShowPassword htmlFor="showPassword" dark={isDark}>
                      Show Password
                    </ShowPassword>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </Form>
              </LoginCard>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
