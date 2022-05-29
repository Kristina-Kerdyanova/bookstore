import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "./types";
const initialState: IBook[] = [
  {
    title: "Designing Across Senses",
    subtitle: "A Multimodal Approach to Product Design",
    isbn13: "9781491954249",
    price: "$27.59",
    image: "https://itbook.store/img/books/9781491954249.png",
    url: "https://itbook.store/books/9781491954249",
  },
  {
    title: "Web Scraping with Python, 2nd Edition",
    subtitle: "Collecting More Data from the Modern Web",
    isbn13: "9781491985571",
    price: "$33.99",
    image: "https://itbook.store/img/books/9781491985571.png",
    url: "https://itbook.store/books/9781491985571",
  },
  {
    title: "Programming iOS 11",
    subtitle: "Dive Deep into Views, View Controllers, and Frameworks",
    isbn13: "9781491999226",
    price: "$59.17",
    image: "https://itbook.store/img/books/9781491999226.png",
    url: "https://itbook.store/books/9781491999226",
  },
];

const newBooksReducer = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default newBooksReducer.reducer;
