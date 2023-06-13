export interface INewBooks {
  total: string;
  books: IBook[];
  error: any;
  status: RequestStatusType;
}

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IFavorite {
  favorites: IBook[];
}

export interface ICart {
  book: IBook[];
  total: number;
  isLoading: boolean;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";

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

export interface IBookDetails {
  error: any;
  status: RequestStatusType;
  details: IBookDetailsApi;
}

export interface ISearchBooksApi extends INewBooks {
  page: string;
}

export interface IBookList {
  list: IBook[];
}

export interface IArguments {
  title: string;
  page: string;
}

export interface ICartItem extends IBookDetailsApi {
  amount: number;
}