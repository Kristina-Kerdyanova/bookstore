import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getNewBooks, getNewBooksError, getNewBooksStatus } from "../store/selectors/booksSelector";
import { addBuy } from "../store/slices/cartReducer";
import { addFavorite } from "../store/slices/favoriteReducer";
import { fetchNewBooks } from "../store/slices/newBooksReducer";
import { IBook } from "../types";



export const NewBooks = () => {
  const books = useAppSelector(getNewBooks);
  const status = useAppSelector(getNewBooksStatus);
  const error = useAppSelector(getNewBooksError);

  const dispatch = useAppDispatch();

  const handleFavorite = (book: IBook) => {
    dispatch(addFavorite(book));
  };

  const handleAddBuy = (book: IBook) => {
    dispatch(addBuy(book));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewBooks());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>
  };

  if (status === 'error') {
    return <div>
      <h1>WE HAVE SOME PROBLEMS</h1>
      <h2>{error.message}</h2>
      <i>{error.code}</i>
    </div>
  };

  return (
    <div>
      <h1>New books</h1>
      <ul>
        {books.map((book: IBook) => (
          <li
            key={book.isbn13}>
            <Link to={`/books/${book.isbn13}`}>
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
            </Link>
            <p> {book.subtitle}</p>
            <p>{book.price}</p>


            <button
              onClick={() => handleFavorite(book)}
            >
              ❤
            </button>

            <button
              onClick={() => handleAddBuy(book)}
            >
              🛒
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

