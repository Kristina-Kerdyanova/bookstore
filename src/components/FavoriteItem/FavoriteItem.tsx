import { RedLike } from "../../assets";
import { useAppDispatch } from "../../store/hooks/hooks";
import { removeFavorite } from "../../store/slices/favoriteReducer";
import { StyledSubtitle } from "../../styles";
import { IBook } from "../../types";
import { ButtonContainer, StyledImage, StyledPrice } from "../BookItem/styles";
import {
  StyledContainerText,
  StyledFavoriteItem,
  StyledTextSubtitle,
} from "../CartItem/styles";
import { StyledLink } from "../Header/styled";
import { Rating } from "../Rating/Rating";
import { RemoveButton, StyledConteinerContent } from "./styles";

export interface IBookItem {
  book: IBook;
}

export const FavoriteItem = ({ book }: IBookItem) => {
  const dispatch = useAppDispatch();

  const handleRemoveFavorite = (book: IBook) => {
    dispatch(removeFavorite(book));
  };

  return (
    <StyledFavoriteItem whileHover={{ y: 10 }} key={book.isbn13}>
      <StyledLink to={`/books/${book.isbn13}`}>
        <StyledImage src={book.image} alt={book.title} />
      </StyledLink>
      <StyledContainerText>
        <StyledSubtitle>{book.title}</StyledSubtitle>
        <StyledTextSubtitle>
          {book.subtitle ? book.subtitle : ""}
        </StyledTextSubtitle>
        <StyledConteinerContent>
          <StyledPrice>
            {book.price === "$0.00" ? "Out of stock" : book.price}
          </StyledPrice>
          <Rating />
        </StyledConteinerContent>
      </StyledContainerText>
      <ButtonContainer>
        <RemoveButton onClick={() => handleRemoveFavorite(book)}>
          <RedLike />
        </RemoveButton>
      </ButtonContainer>
    </StyledFavoriteItem>
  );
};
