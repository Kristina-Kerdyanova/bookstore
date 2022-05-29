import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userReducer";
import cartReducer from "./slices/cartReducer";
import favoriteReducer from "./slices/favoriteReducer";
import newBooksReducer from "./slices/newBooksReducer";


export const store = configureStore({
  reducer: {
    user: userReducer,
    newBooks: newBooksReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
