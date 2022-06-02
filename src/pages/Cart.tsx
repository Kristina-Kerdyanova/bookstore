import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks/hooks';
import { getCart } from '../store/selectors/cartSelector';
import { deleteBuy } from '../store/slices/cartReducer';
import { IBook } from '../types';


export const Cart = () => {
    const { buy } = useAppSelector(getCart);
    const dispatch = useDispatch();

    const handleDeleteBuy = (book: IBook) => {
        dispatch(deleteBuy(book));
    };

    return (
        <><header>
            <h1>YOUR CART</h1>
            {/* <button>Back</button> */}
            <p>{buy.length}</p>
        </header>
            <ul>
                {buy.map((book: IBook) => (
                    <li key={book.isbn13}>
                        <img src={book.image} alt={book.title} />
                        <h2>{book.title}</h2>
                        <p> {book.subtitle}</p>
                        <p>{book.price}</p>
                        <button onClick={() => handleDeleteBuy(book)}>x</button>
                    </li>
                ))}
            </ul></>
    );
};
