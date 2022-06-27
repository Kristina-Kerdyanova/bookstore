import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookService";
import { IBookDetails, IBookDetailsApi } from "../../types";

const initialState: IBookDetails = {
  error: null,
  status: "idle",
  details: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {
      "": "",
    },
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
};

export const fetchDetailsBook = createAsyncThunk<IBookDetailsApi, string>(
  "/books/fetchDetailsBook",
  async (id) => {
    return bookApi.getBookDetails(id);
  }
);

const detailsReducer = createSlice({
  name: "detailsBook",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDetailsBook.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchDetailsBook.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.details = payload;
    });
    builder.addCase(fetchDetailsBook.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export default detailsReducer.reducer;
