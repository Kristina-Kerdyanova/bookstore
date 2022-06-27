import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { CartItem } from "../components/CartItem/CartItem";
import { routers } from "../routes/routers";
import { useAppSelector } from "../store/hooks/hooks";
import { getCart } from "../store/selectors/cartSelector";
import { RootState } from "../store/store";
import { StyledTitle, StyledSubtitle } from "../styles";
import { IBook } from "../types";

export const Cart = () => {
  const { isAuth } = useSelector(({ user }: RootState) => user);
  const { book } = useAppSelector(getCart);

  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let totalAmount = 0.0;
    book.forEach((book: IBook) => {
      totalAmount += Number(book.price.slice(1));
    });
    setTotal(totalAmount);
  }, [book]);

  if (isAuth) {
    return (
      <>
        <header>
          <ButtonBack />
          <StyledTitle>YOUR CART</StyledTitle>
          <StyledSubtitle>Books: {book.length}</StyledSubtitle>
          <StyledSubtitle>Total: {total.toFixed(2)}$ </StyledSubtitle>
        </header>
        <ul>
          {book.map((book: IBook) => (
            <CartItem book={book} />
          ))}
        </ul>
      </>
    );
  }

  return <Navigate to={routers.SIGN_UP} />;
};
