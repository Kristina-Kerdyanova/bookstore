import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { ISearchBooksApi } from "../../types";


const initialState: ISearchBooksApi = {
  total: "",
  page: "",
  books: [],
  error: null,
  status: "idle",
};

export const fetchSearch = createAsyncThunk<ISearchBooksApi>(
  "/search/fetchSearch",
  async () => {
    return bookApi.getBooksBySearch("", "");
  }
);

const searchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.books = payload.books;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export default searchReducer.reducer;
