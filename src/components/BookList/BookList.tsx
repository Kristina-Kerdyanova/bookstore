import { BookItem } from "../BookItem/BookItem";
import { StyledBookList } from "./styles";

import { IBook } from "../../types";
import {
  getNewBooks,
  getNewBooksError,
  getNewBooksStatus,
} from "../../store/selectors/booksSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { useEffect } from "react";
import { fetchNewBooks } from "../../store/slices/newBooksReducer";

export const BookList = () => {
  const books = useAppSelector(getNewBooks);
  const status = useAppSelector(getNewBooksStatus);
  const error = useAppSelector(getNewBooksError);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewBooks());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return (
      <div>
        <h1>WE HAVE SOME PROBLEMS</h1>
        <h2>{error.message}</h2>
        <i>{error.code}</i>
      </div>
    );
  }
  return (
    <StyledBookList>
      {books.map((book: IBook) => {
        return <BookItem key={book.isbn13} book={book} />;
      })}
    </StyledBookList>
  );
};
