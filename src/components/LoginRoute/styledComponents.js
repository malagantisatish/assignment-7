import styled from 'styled-components'

export const Heading = styled.h1`
  color: red;
`
export const BgContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.dark ? ' #383838' : 'white')};
`

export const LoginCard = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 36px 3px rgb(1, 1, 1, 0.98);
  border-radius: 12px;
`
export const LabelText = styled.label`
  font-size: 22px;
  color: #94a3b8;
  font-family: 'Roboto';
  align-self: flex-start;
  padding-left: 28px;
  color: ${props => (props.dark ? 'white' : '#94a3b8')};
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputElement = styled.input`
  width: 90%;
  height: 40px;
`
export const LogoImage = styled.img`
  height: 60px;
  margin: 10px;
  width: 200px;
  align-self: center;
`

export const Checkbox = styled.input`
  height: 40px;
`
export const ShowPassword = styled.label`
  font-size: 22px;
  font-family: 'Roboto';
  color: ${props => (props.dark ? 'white' : '#94a3b8')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding-left: 28px;
`
export const LoginButton = styled.button`
  height: 40px;
  width: 60%;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 8px;
  border-width: 0px;
  align-self: center;
  margin: 10px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 20px;
  font-family: 'Roboto';
`
