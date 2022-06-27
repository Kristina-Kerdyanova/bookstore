import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Back } from "../assets";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { FavoriteItem } from "../components/FavoriteItem/FavoriteItem";
import { routers } from "../routes/routers";
import { useAppSelector } from "../store/hooks/hooks";
import { getFavorite } from "../store/selectors/favoriteSelector";
import { removeFavorite } from "../store/slices/favoriteReducer";
import { RootState } from "../store/store";
import { StyledSubtitle, StyledTitle } from "../styles";
import { IBook } from "../types";

export const Favorite = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { favorites } = useAppSelector(getFavorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFavorite = (book: IBook) => {
    dispatch(removeFavorite(book));
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isAuth) {
    return (
      <>
        <header>
        <ButtonBack/>
          <StyledTitle>YOUR FAVORITES</StyledTitle>
          <StyledSubtitle>Books: {favorites.length}</StyledSubtitle>
        </header>
        <ul>
          {favorites.map((book: IBook) => (
            <FavoriteItem book={book} />
          ))}
        </ul>
      </>
    );
  }
  return <Navigate to={routers.SIGN_UP} />;
};



