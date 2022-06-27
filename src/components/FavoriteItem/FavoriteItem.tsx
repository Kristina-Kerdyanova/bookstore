import { RedLike } from "../../assets";
import { useAppDispatch } from "../../store/hooks/hooks";
import { removeFavorite } from "../../store/slices/favoriteReducer";
import { StyledSubtitle } from "../../styles";
import { IBook } from "../../types";
import {
  ButtonContainer,
  StyledBookItem,
  StyledImage,
  StyledPrice,
  StyledText,
} from "../BookItem/styles";
import { StyledContainerText } from "../CartItem/styles";
import { StyledLink } from "../Header/styled";
import { RemoveButton } from "./styles";

export interface IBookItem {
  book: IBook;
}

export const FavoriteItem = ({ book }: IBookItem) => {
  const dispatch = useAppDispatch();

  const handleRemoveFavorite = (book: IBook) => {
    dispatch(removeFavorite(book));
  };

  return (
    <StyledBookItem>
      <StyledLink to={`/books/${book.isbn13}`}>
        <StyledImage src={book.image} alt={book.title} />
        </StyledLink>
        <StyledContainerText>
        <StyledSubtitle>{book.title}</StyledSubtitle>
        <StyledText>{book.subtitle ? book.subtitle : ""}</StyledText>
        </StyledContainerText>
      <StyledPrice>
        {book.price === "$0.00" ? "Out of stock" : book.price}
      </StyledPrice>
      
      <ButtonContainer>
        <RemoveButton onClick={() => handleRemoveFavorite(book)}>
          <RedLike />
        </RemoveButton>
      </ButtonContainer>
    </StyledBookItem>
  );
};
