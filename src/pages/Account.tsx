import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { StyledLink } from "../components/Header/styled";
import { routers } from "../routes/routers";
import { useAppSelector } from "../store/hooks/hooks";
import { getCart } from "../store/selectors/cartSelector";
import { getFavorite } from "../store/selectors/favoriteSelector";
import { RootState } from "../store/store";
import { StyledSubtitle, StyledTitle } from "../styles";

export const Account = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { favorites } = useAppSelector(getFavorite);
  const { book } = useAppSelector(getCart);


  if (isAuth) {
    return (
      <>
        <StyledTitle>Welcome to BOOKSTORE!</StyledTitle>
        <StyledLink to={`/favorite`}>
          <StyledSubtitle>YOUR FAVORITES BOOKS: {favorites.length}</StyledSubtitle>
        </StyledLink>
        <StyledLink to={`/cart`}>
          <StyledSubtitle>YOUR CART: {book.length}</StyledSubtitle>
        </StyledLink>
      </>
    );
  }

  return <Navigate to={routers.SIGN_UP} />;
};
