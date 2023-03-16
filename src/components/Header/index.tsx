import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-coffee.svg'
import MapPoint from '../../assets/icons/IconMapPoint.svg'
import CartCheckout from '../../assets/icons/CartCheckout.svg'
import { HeaderContainer, Local } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt=""></img>
      </NavLink>
      <div>
        <Local>
          <img src={MapPoint} alt="" />
          <p>Rio de Janeiro, RJ</p>
        </Local>
        <NavLink to="/checkout" title="Carrinho">
          <img src={CartCheckout} alt="" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
