import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-items: center;
  background-color: #ffffff;
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
  width: max-content;
  padding: 10px;
  border-radius: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
`

export const Image = styled.img`
  width: 150px;
  border-radius: 20px;
`

export const ProductName = styled.p`
  width: 150px;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
`

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  margin-top: 20px;
`

export const Button = styled.button``
