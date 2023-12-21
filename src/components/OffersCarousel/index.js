import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  OffersImage,
  ContainerItems,
  Image,
  OfferName,
  OfferPrice,
  Button
} from './styles.js'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')
      const offerProducts = data
        .filter(products => products.offer)
        .map(products => {
          return { ...products, formatedPrice: formatCurrency(products.price) }
        })
      setOffers(offerProducts)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OffersImage src={Offers} alt="offers-logo" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(offer => (
            <ContainerItems key={offer.id}>
              <Image src={offer.url} alt="imagem-oferta" />
              <OfferName>{offer.name}</OfferName>
              <OfferPrice>{offer.formatedPrice}</OfferPrice>
              <Button
                onClick={() => {
                  putProductInCart(offer)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
