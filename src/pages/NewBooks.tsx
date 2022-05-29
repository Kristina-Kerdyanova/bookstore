import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getNewBooks } from "../store/selectors/booksSelector";
import { addBuy } from "../store/slices/cartReducer";
import { addFavorite } from "../store/slices/favoriteReducer";
import { IBook } from "../types";

export const NewBooks = () => {
  const books = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  const handleFavorite = (book: IBook) => {
    dispatch(addFavorite(book));
  };

  const handleAddBuy = (book: IBook) => {
    dispatch(addBuy(book));
  };
  return (
    <div>
      <h1>NewBooks</h1>
      <ul>
        {books.map(book => (
          <li key={book.isbn13}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
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
