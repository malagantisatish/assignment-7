import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgb(0, 0, 0, 0.98);
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.dark ? '#313131' : 'white')};
`

export const LogoImage = styled.img`
  height: 50px;
  width: 140px;
  margin: 10px;
`
export const NavbarOptions = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: space-between;
  padding: 10px;
`

export const ThemeModeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.dark ? 'white' : 'black')};
`

export const ProfileImage = styled.img`
  height: 50px;
  margin: 10px;
  @media (max-width: 576px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  height: 50px;
  width: 120px;
  border-color: ${props => (props.dark ? 'white' : 'black')};
  color: ${props => (props.dark ? 'white' : 'black')};
  margin: 10px;
  background-color: transparent;
  @media (max-width: 576px) {
    display: none;
  }
`
export const LogoutButtonForSm = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.dark ? 'white' : 'black')};
  @media (min-width: 576px) {
    display: none;
  }
`

export const MenuContainer = styled.div`
  height: 90vh;
  width: 90vw;
  text-decoration: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#383838' : 'white')};
`
export const MenuContainerOptions = styled.ul`
  list-style: none;
  text-decoration: normal;
`

export const Options = styled.li`
  display: flex;
  align-items: center;
  text-decoration: normal;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
`

export const Option = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
`

//  LogoutBtn,CancelBtn,ButtonContainer,Text,LogoutPopUpContainer

export const LogoutBtn = styled.button`
  height: 50px;
  width: 100px;
  border-width: 0px;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
  margin: 10px;
`

export const CancelBtn = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 8px;
  background-color: transparent;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
  margin: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90;
  align-items: center;
`

export const Text = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 24px;
  text-decoration: none;
  font-style: normal;
  padding-left: 10px;
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
`

export const LogoutPopUpContainer = styled.div`
  height: 300px;
  width: 80vh;
  background-color: ${props => (props.dark ? '#383838' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px 2px rgb(0, 0, 0, 0.95);
`
