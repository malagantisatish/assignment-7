import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun, FiBookmark} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {GiCancel} from 'react-icons/gi'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  LogoImage,
  NavbarOptions,
  ThemeModeButton,
  ProfileImage,
  LogoutButton,
  LogoutButtonForSm,
  MenuContainer,
  MenuContainerOptions,
  Option,
  Options,
  LogoutPopUpContainer,
  LogoutBtn,
  CancelBtn,
  ButtonContainer,
  Text,
} from './styledComponents'

const Header = props => {
  const logoutTheUser = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const lightLogoImage =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  const darkLogoImage =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedList, addToSavedList, toggleTheTheme} = value
        const changeTheTheme = () => {
          toggleTheTheme()
        }

        const logoImage = isDark ? darkLogoImage : lightLogoImage

        const renderTheMenuContainer = () => (
          <MenuContainer dark={isDark}>
            <MenuContainerOptions>
              <Link to="/" className="link-elements">
                <Options dark={isDark}>
                  <AiFillHome size={25} />
                  <Option dark={isDark}>Home</Option>
                </Options>
              </Link>
              <Link to="/trending" className="link-elements">
                <Options dark={isDark}>
                  <AiFillFire size={25} />
                  <Option dark={isDark}>Trending</Option>
                </Options>
              </Link>
              <Link to="/gaming" className="link-elements">
                <Options dark={isDark}>
                  <SiYoutubegaming size={25} />
                  <Option dark={isDark}>Gaming</Option>
                </Options>
              </Link>
              <Link to="/saved-videos" className="link-elements">
                <Options dark={isDark}>
                  <FiBookmark size={25} />
                  <Option dark={isDark}>Saved videos</Option>
                </Options>
              </Link>
            </MenuContainerOptions>
          </MenuContainer>
        )

        return (
          <Navbar dark={isDark}>
            <Link to="/">
              <LogoImage src={logoImage} alt="website logo" />
            </Link>
            <NavbarOptions>
              <li>
                <ThemeModeButton
                  type="button"
                  onClick={changeTheTheme}
                  dark={isDark}
                  data-testid="theme"
                >
                  {isDark ? <FiSun size={30} /> : <FaMoon size={30} />}
                </ThemeModeButton>
              </li>
              <li>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <LogoutButtonForSm type="button" dark={isDark}>
                      <BiMenu size={25} />
                    </LogoutButtonForSm>
                  }
                >
                  {close => (
                    <>
                      {renderTheMenuContainer()}
                      <LogoutButton type="button" onClick={() => close()}>
                        <GiCancel size={25} />
                      </LogoutButton>
                    </>
                  )}
                </Popup>
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      onClick={logoutTheUser}
                      dark={isDark}
                    >
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <>
                      <LogoutPopUpContainer dark={isDark}>
                        <Text dark={isDark}>
                          Are you sure, you want to logout
                        </Text>
                        <ButtonContainer>
                          <CancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </CancelBtn>
                          <LogoutBtn type="button" onClick={logoutTheUser}>
                            Confirm
                          </LogoutBtn>
                        </ButtonContainer>
                      </LogoutPopUpContainer>
                      <LogoutButton type="button" onClick={() => close()}>
                        <GiCancel size={25} />
                      </LogoutButton>
                    </>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutButtonForSm type="button" dark={isDark}>
                      <FiLogOut size={25} />
                    </LogoutButtonForSm>
                  }
                >
                  {close => (
                    <>
                      <LogoutPopUpContainer dark={isDark}>
                        <Text dark={isDark}>
                          Are you sure, you want to logout
                        </Text>
                        <ButtonContainer>
                          <CancelBtn type="button" onClick={() => close()}>
                            Cancel
                          </CancelBtn>
                          <LogoutBtn type="button" onClick={logoutTheUser}>
                            Confirm
                          </LogoutBtn>
                        </ButtonContainer>
                      </LogoutPopUpContainer>
                    </>
                  )}
                </Popup>
              </li>
            </NavbarOptions>
          </Navbar>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
