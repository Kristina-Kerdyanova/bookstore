import { RootState } from "../store";

export const getSearchBooks = (state: RootState) => state.search.books;
export const getSearchStatus = (state:RootState) => state.search.status;
export const getSearchError = (state:RootState) => state.search.error;
export const getSearchPage = (state:RootState) => state.search.page;
export const getSearchTotal = (state:RootState) => state.search.total;
