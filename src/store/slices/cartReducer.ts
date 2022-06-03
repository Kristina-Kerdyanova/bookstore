import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, ICart } from "../../types";


const initialState: ICart = {
  buy: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBuy: (state, { payload }: PayloadAction<IBook>) => {
        state.buy = [
          { ...payload },
          ...state.buy.filter((item) => item.isbn13 !== payload.isbn13),
        ];
      },
      deleteBuy: (state, {payload}:  PayloadAction<IBook>) => {
          state.buy = state.buy.filter(
              item => item.isbn13 !== payload.isbn13
          );
      },
  },
});

export default cartSlice.reducer;
export const { addBuy, deleteBuy } = cartSlice.actions;
