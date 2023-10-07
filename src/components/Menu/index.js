import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MenuContainer,
  MenuContainerOptions,
  Option,
  Options,
  ContactDetailsContainer,
  SocialMediaList,
  SocialMediaImage,
  ContactHeading,
  DescriptionOfMedia,
} from './styledComponent'

const Menu = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedList, addToSavedList} = value
      return (
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
          <ContactDetailsContainer>
            <ContactHeading dark={isDark}>CONTACT US</ContactHeading>
            <SocialMediaList>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </SocialMediaList>
            <DescriptionOfMedia dark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </DescriptionOfMedia>
          </ContactDetailsContainer>
        </MenuContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Menu
