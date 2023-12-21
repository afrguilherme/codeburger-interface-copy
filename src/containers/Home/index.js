import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImage } from './styles.js'

export function Home() {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="home-logo" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
