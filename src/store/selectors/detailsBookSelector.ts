import { RootState } from "../store";

export const getBookDetails = (state: RootState) => state.detailsBook.details;
export const getBookDetailsStatus = (state: RootState) => state.detailsBook.status;
export const getBookDetailsError = (state: RootState) => state.detailsBook.error;