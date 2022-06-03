import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { INewBooks } from "../../types";


const initialState: INewBooks = {
  total: "",
  books: [],
  error: null,
  status: "idle",
};

export const fetchNewBooks = createAsyncThunk<INewBooks>(
  "new/fetchNewBooks",
  async () => {
    return bookApi.getBooks();
  }
);

const newBooksReducer = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.books = payload.books;
    });
    builder.addCase(fetchNewBooks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export default newBooksReducer.reducer;
