import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks &&
        listLinks.map(item => (
          <ItemContainer $isActive={path === item.link} key={item.id}>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
          </ItemContainer>
        ))}
      <hr></hr>
      <ItemContainer>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink
          style={{ background: 'transparent' }}
          onClick={logout}
          to="/entrar"
        >
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
