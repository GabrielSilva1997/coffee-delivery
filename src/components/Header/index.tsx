import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-coffee.svg'
import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt=""></img>
      <NavLink to="/checkout" title="Carrinho">
        <ShoppingCart size={32} />
      </NavLink>
    </HeaderContainer>
  )
}
