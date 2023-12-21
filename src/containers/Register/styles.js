import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const RegisterImage = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  background: rgba(55, 55, 55, 1);
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  height: 90%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    @media (min-height: 658px) {
      margin-bottom: 2em;
    }
  }

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
  }
  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin: ${props => (props.$error ? '0' : '5px 5px')};
`

export const Input = styled.input`
  width: 391px;
  height: 38px;
  border-radius: 5px;
  border: ${props =>
    props.$error ? '2px solid rgba(204, 23, 23, 1)' : 'none'};
  padding-left: 10px;
  margin-bottom: 0;

  @media (min-height: 658px) {
    margin-bottom: 1em;
  }
`

export const SignInLink = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-top: 27px;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Error = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(204, 23, 23, 1);
  margin-top: 5px;
`
