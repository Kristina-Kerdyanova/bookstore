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
};

export interface IFavorite {
  sortMode: string;
  favorites: IBook[];
};

export interface ICart {
  buy: IBook[];
};

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

export interface ISearchBooksApi extends INewBooks {
  page: string;
}
