import { Cancel } from "../../assets";
import { useAppDispatch } from "../../store/hooks/hooks";
import { deleteBook } from "../../store/slices/cartReducer";
import { StyledSubtitle } from "../../styles";
import { IBook } from "../../types";
import {
  StyledImage,
  ButtonContainer,
  StyledBigPrice,
} from "../BookItem/styles";
import { IBookItem } from "../FavoriteItem/FavoriteItem";
import { StyledLink } from "../Header/styled";
import {
  CancelButton,
  ContainerContent,
  StyledContainerText,
  StyledFavoriteItem,
  StyledTextSubtitle,
} from "./styles";

export const CartItem = ({ book }: IBookItem) => {
  const dispatch = useAppDispatch();

  const handleDeleteBook = (book: IBook) => {
    dispatch(deleteBook(book));
  };

  // const handlePlus = (book: ICartItem) => {
  //   dispatch(increaseAmount(book));
  // };

  // const handleMinus = (book: ICartItem) => {
  //   if (book.amount > 1) {
  //     dispatch(decreaseAmount(book));
  //   }

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
      </StyledContainerText>
      <ContainerContent>
      <StyledBigPrice>
        {book.price === "$0.00" ? "Out of stock" : book.price}
      </StyledBigPrice>
      <ButtonContainer>
        <CancelButton onClick={() => handleDeleteBook(book)}>
          <Cancel />
        </CancelButton>
        {/* <button onClick={() => handleMinus(book)}>-</button>
        <p>{book.amount}</p>
        <button onClick={() => handlePlus(book)}>+</button> */}
      </ButtonContainer>
      </ContainerContent>
    </StyledFavoriteItem>
  );
};
