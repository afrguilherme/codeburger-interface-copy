import React from 'react'

import CartLogo from '../../assets/cart-logo.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImage, Wrapper } from './styles.js'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt="cart-logo" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
