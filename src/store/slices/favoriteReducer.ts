import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IFavorite } from "../../types";


const initialState: IFavorite = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IBook>) => {
      state.favorites = [
        { ...payload },
        ...state.favorites.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFavorite: (state, {payload}:  PayloadAction<IBook>) => {
        state.favorites = state.favorites.filter(
            item => item.isbn13 !== payload.isbn13
        );
    },
  },
});

export default favoriteSlice.reducer;

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
