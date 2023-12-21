import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(60, 60, 60, 1);
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  min-height: 100vh;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
  border-radius: 5px;
  margin: 20px 0;
  color: #ffffff;
  background: ${props => (props.$isActive ? 'rgba(86, 86, 86, 1)' : 'none')};
`

export const ListLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }
`
