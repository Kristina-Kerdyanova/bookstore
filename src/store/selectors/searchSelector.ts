import { RootState } from "../store";

export const getSearch = (state: RootState) => state.search;
export const getSearchStatus = (state:RootState) => state.search.status;
export const getSearchError = (state:RootState) => state.search.error;
export const getSearchPage = (state:RootState) => state.search.page;
export const getSearchTotal = (state:RootState) => state.search.total;
