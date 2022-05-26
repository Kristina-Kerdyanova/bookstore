import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bookApi } from "../services/bookService";
import { INewBooksApi } from "../types";

export const NewBooks = () => {
  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });

  useEffect(() => {
    bookApi.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);
  return (
    <div>
      <h1>New Books</h1>
      <h2>Error: {newBooks.error} </h2>
      <h2>Total new Books: {newBooks.total} </h2>
      <ul>
        {newBooks.books.map(book => {
          return <li key={book.isbn13}>
            <Link to={`/books/${book.isbn13}`}>
            <h1>{book.title}</h1>
            <p>{book.subtitle}</p>
            <p>{book.price}</p>
            </Link>
            </li>
        })}
      </ul>
    
    </div>
    )
};
