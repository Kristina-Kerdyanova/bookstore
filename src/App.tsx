import { useEffect, useState } from "react";
import { BookList } from "./components/BookList/BookList";
import { IBook } from "./types/types";

export const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <BookList books={books} />
    </div>
  );
};
