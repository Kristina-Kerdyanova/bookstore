export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface INewBooksApi {
  books: IBook[];
  error: string;
  total: string;
}

export interface IBookDetailsApi {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: {
    [key: string]: string;
  };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

export interface ISearchBooksApi extends INewBooksApi {
  page: string;
}