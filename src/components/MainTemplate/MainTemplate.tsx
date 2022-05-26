import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const MainTemplate = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/favorite">Favorite</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
        <StyledLink to="/account">Account</StyledLink>
      </nav>
      <Outlet />
    </div>
  );
};

const StyledLink = styled(Link)`
margin: 2px;
`;
