import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { IArguments, ISearchBooksApi } from "../../types";

const initialState: ISearchBooksApi = {
  total: "",
  page: "",
  books: [],
  error: null,
  status: "idle",
};

export const fetchBooksBySearch = createAsyncThunk<ISearchBooksApi, IArguments>(
  "/search/fetchBooksBySearch",
  async ({page, title}) => {
    return bookApi.getBooksBySearch({page, title});
  }
);

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.books = payload.books;
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export default searchReducer.reducer;
