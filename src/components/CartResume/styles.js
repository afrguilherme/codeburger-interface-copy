import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  gap: 80px;

  .container-top {
    display: grid;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';
    grid-gap: 10px 50px;

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
  }
`

export const ContainerItems = styled.div``
