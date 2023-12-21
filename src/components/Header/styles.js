import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  width: 100%;
  max-width: 100vw;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .images-wrapper {
    display: flex;

    .right-text {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-right: 25px;
        font-size: 16px;
        font-weight: bold;
        line-height: 19px;
      }

      .exit {
        color: rgba(151, 88, 166, 1);
        font-weight: bold;
        cursor: pointer;

        &:hover {
          opacity: 0.6;
        }

        &:active {
          opacity: 1;
        }
      }
    }
  }

  .pages-wrapper {
    display: flex;
    margin-left: 150px;
  }
`

export const PageLink = styled.h2`
  margin-right: 25px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  cursor: pointer;
  color: ${props =>
    props.$isActive ? 'rgba(151, 88, 166, 1)' : 'rgba(85, 85, 85, 1)'};

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
`

export const CartImage = styled.img`
  padding-right: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
`

export const Line = styled.img`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const UserImage = styled.img`
  padding-left: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  }
`
