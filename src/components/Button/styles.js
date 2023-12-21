import styled from 'styled-components'

export const ContainerButton = styled.button`
  margin-top: 50px;
  width: 182px;
  height: 38px;
  background: #9758a6;
  color: rgba(255, 255, 255, 1);
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`
