import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks/hooks';
import { getFavorite } from '../store/selectors/favoriteSelector';
import { removeFavorite } from '../store/slices/favoriteReducer';
import { IBook } from '../types';
;

export const Favorite = () => {
  const { favorites } = useAppSelector(getFavorite);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (book: IBook) => {
    dispatch(removeFavorite(book));

  }

  return (
    <><header>
      <h1>YOUR FAVORITES</h1>
      <p>{favorites.length}</p>
    </header>
      <ul>
        {favorites.map((book: IBook) => (
          <li key={book.isbn13}>
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p> {book.subtitle}</p>
            <p>{book.price}</p>
            <button
              onClick={() => handleRemoveFavorite(book)}
            >
              ❤
            </button>
          </li>
        ))}
      </ul></>
  );
};
