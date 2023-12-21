import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #efefef;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProductsImage = styled.img`
  width: 100%;
  max-width: 100vw;
`
export const CategoriesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 10px 0;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  padding-bottom: 5px;
  border: none;
  border-bottom: ${props =>
    props.$isActiveCategory && '2px solid rgba(151, 88, 166, 1)'};
  color: ${props =>
    props.$isActiveCategory
      ? 'rgba(151, 88, 166, 1)'
      : 'rgba(154, 154, 157, 1)'};
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
