import { Like, Cart, User } from "../../assets"
import { routers } from "../../routes/routers"
import { StyledLink } from "../Header/styled"
import { StyledNav } from "./styles"

export const Nav = () => {
  
  return (
    <StyledNav>
      <StyledLink to={routers.FAVORITE}>
        <Like />
      </StyledLink>
      <StyledLink to={routers.CART}>
        <Cart />
      </StyledLink>
      <StyledLink to={routers.ACCOUNT}>
        <User />
      </StyledLink>
    </StyledNav>
  )
}
