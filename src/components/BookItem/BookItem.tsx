import { Cart, Like } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getNewBooks } from "../../store/selectors/booksSelector";
import { getBookDetails } from "../../store/selectors/detailsBookSelector";
import { addBook } from "../../store/slices/cartReducer";
import { addFavorite } from "../../store/slices/favoriteReducer";
import { StyledSubtitle } from "../../styles";
import { IBook, IBookDetails } from "../../types";
import {
  ButtonContainer,
  StyledBookItem,
  StyledButton,
  StyledButtonCart,
  StyledButtonFavorite,
  StyledImage,
  StyledLink,
  StyledPrice,
  StyledSubtitleBook,
  StyledText,
} from "./styles";

interface IBookItem {
  book: IBook;
}

export const BookItem = ({ book }: IBookItem) => {
  const dispatch = useAppDispatch();

  const handleFavorite = (book: IBook) => {
    dispatch(addFavorite(book));
  };

  const handleAddBook = (book: IBook) => {
    dispatch(addBook(book));
  };
  return (
    <StyledBookItem whileHover={{ y: 10 }} key={book.isbn13}>
      <StyledImage src={book.image} alt={book.title} />
      <StyledLink to={`/books/${book.isbn13}`}>
        <StyledSubtitleBook>{book.title}</StyledSubtitleBook>
        <StyledText>{book.subtitle ? book.subtitle : ""}</StyledText>
      </StyledLink>
      <StyledPrice>
        {book.price === "$0.00" ? "Out of stock" : book.price}
      </StyledPrice>
      <StyledButton>
      <StyledButtonFavorite onClick={() => handleFavorite(book)}>
        <Like />
      </StyledButtonFavorite>
      <StyledButtonCart onClick={() => handleAddBook(book)}>
        <Cart />
      </StyledButtonCart>
      </StyledButton>
    </StyledBookItem>
  );
};
