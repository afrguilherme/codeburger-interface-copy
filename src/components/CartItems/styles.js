import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  padding: 10px;
  margin-bottom: 50px;
  border-radius: 20px;
  width: max-content;
  min-width: 800px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* width: max-content; */
  grid-gap: 10px 15px;
  padding: 10px 15px;
  border-radius: 20px;

  img {
    border-radius: 10px;
    width: 120px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    max-width: 100px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    align-items: center;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
  }
`
export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
`
