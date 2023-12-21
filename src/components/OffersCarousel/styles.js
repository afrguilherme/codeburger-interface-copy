import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  // Categories carousel arrow
  .rec.rec-arrow {
    background-color: rgba(151, 88, 166, 1);
    color: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid rgba(151, 88, 166, 1);
    background-color: #efefef;
    color: rgba(151, 88, 166, 1);
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: efefef;
  }
`

export const OffersImage = styled.img`
  width: 100%;
  max-width: 210px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 100vw;
  width: 100%;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`

export const Button = styled.button`
  background: rgba(151, 88, 166, 1);
  border: none;
  outline: none;
  height: 60px;
  width: 260px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`

export const OfferName = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: rgba(66, 66, 66, 1);
`
export const OfferPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: rgba(33, 33, 33, 1);
`
