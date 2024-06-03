import { NavLink } from "react-router-dom";
import { Aside, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="/logo.svg" alt=""/>
      </NavLink>
     
      <Aside>
        <div>
          <MapPin weight="fill" size={22}/>
          <span>Goiânia, GO</span>
        </div>

        <NavLink to="/checkout">
          <ShoppingCart  weight="fill"  size={22}/>
          <span>2</span>
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}