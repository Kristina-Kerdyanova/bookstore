import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartReducer";
import detailsBookReducer from "./slices/detailsBookReducer";
import favoriteReducer from "./slices/favoriteReducer";
import newBooksReducer from "./slices/newBooksReducer";
import searchReducer from "./slices/searchReducer";
import userReducer from "./slices/userReducer";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    search: searchReducer,
    detailsBook: detailsBookReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
