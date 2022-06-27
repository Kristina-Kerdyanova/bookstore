import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, ICart } from "../../types";

const initialState: ICart = {
  book: [],
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook: (state, { payload }: PayloadAction<IBook>) => {
      state.book = [
        { ...payload },
        ...state.book.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    deleteBook: (state, { payload }: PayloadAction<IBook>) => {
      state.book = state.book.filter((item) => item.isbn13 !== payload.isbn13);
    },

    // increaseAmount: (state, { payload }: PayloadAction<ICartItem>) => {
    //   const book = state.book.find((item) => item.isbn13 === payload.isbn13);

    //   if (book) {
    //     book.amount = book.amount + 1;
    //   }
    // },
    // decreaseAmount: (state, { payload }: PayloadAction<ICartItem>) => {
    //   const book = state.book.find((item) => item.isbn13 === payload.isbn13);

    //   if (book) {
    //     book.amount = book.amount - 1;
    //   }
    // },
  },
});

export default cartSlice.reducer;
export const { addBook, deleteBook } = cartSlice.actions;
