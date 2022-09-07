import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookItem } from "../../components/BookItem/BookItem";
import { StyledBookList } from "../../components/BookList/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getSearch,
  getSearchError,
  getSearchStatus,
} from "../../store/selectors/searchSelector";
import { fetchBooksBySearch } from "../../store/slices/searchReducer";
import { IBook } from "../../types";
import {
  StyledSearchBooks,
  ControlContainer,
  ButtonPagination,
  StyledPage,
} from "./styles";

export const SearchBooksResults = () => {
  const { title = "", page = "" } = useParams();
  const { books } = useAppSelector(getSearch);
  const status = useAppSelector(getSearchStatus);
  const error = useAppSelector(getSearchError);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    navigate(`/search/${title}/${Number(page) + 1}`);
  };

  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };

  useEffect(() => {
    dispatch(fetchBooksBySearch({ page, title }));
  }, [dispatch, title, page]);

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
    <StyledSearchBooks>
      <ControlContainer>
        <ButtonPagination type="button" onClick={handlePrevPage}>
          Previous Page
        </ButtonPagination>
        <StyledPage> - {page} - </StyledPage>
        <ButtonPagination type="button" onClick={handleNextPage}>
          Next Page
        </ButtonPagination>
      </ControlContainer>
      <StyledBookList>
        {books.map((book: IBook) => {
          return <BookItem key={book.isbn13} book={book} />;
        })}
      </StyledBookList>
    </StyledSearchBooks>
  );
};
