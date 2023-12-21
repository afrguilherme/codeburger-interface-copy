import React from 'react'
import { useHistory } from 'react-router-dom'

import CartIcon from '../../assets/cart-icon.svg'
import UserIcon from '../../assets/user-icon.svg'
import { useUser } from '../../hooks/UserContext'
import { Container, CartImage, UserImage, Line, PageLink } from './styles.js'

export function Header() {
  const { logout, userData } = useUser()

  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/Entrar')
  }

  return (
    <Container>
      <div className="pages-wrapper">
        <PageLink onClick={() => push('/')} $isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/Produtos')}
          $isActive={pathname.includes('Produtos')}
        >
          Ver produtos
        </PageLink>
      </div>
      <div className="images-wrapper">
        <CartImage
          onClick={() => push('/Carrinho')}
          src={CartIcon}
          alt="cart-icon"
        />
        <Line></Line>
        <UserImage src={UserIcon} alt="user-icon" />
        <div className="right-text">
          <h2>Olá, {userData.name}!</h2>
          <h2 onClick={logoutUser} className="exit">
            Sair
          </h2>
        </div>
      </div>
    </Container>
  )
}
