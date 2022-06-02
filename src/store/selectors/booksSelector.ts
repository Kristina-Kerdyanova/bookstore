import { RootState } from "../store";

export const getNewBooks = (state: RootState) => state.newBooks.books;
export const getNewBooksStatus = (state:RootState) => state.newBooks.status;
export const getNewBooksError = (state:RootState) => state.newBooks.error;
