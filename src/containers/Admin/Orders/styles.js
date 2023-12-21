import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`

export const ProductImage = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: rgba(50, 61, 93, 1);
  cursor: pointer;
  font-weight: ${props => (props.$isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.$isActiveStatus ? '2px solid rgba(151, 88, 166, 1)' : 'none'};
  padding-bottom: 5px;
`
