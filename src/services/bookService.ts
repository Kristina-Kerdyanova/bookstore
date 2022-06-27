import axios from "axios";
import {
  IArguments,
  IBookDetailsApi,
  INewBooks,
  ISearchBooksApi,
} from "../types";

class BookService {
  private readonly API_URL = "https://api.itbook.store/1.0";
  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getBooks(): Promise<INewBooks> {
    const { data } = await this.api.get<INewBooks>("new");
    return data;
  }

  public async getBookDetails(id: string): Promise<IBookDetailsApi> {
    const { data } = await this.api.get<IBookDetailsApi>(`/books/${id}`);
    return data;
  }

  public async getBooksBySearch({
    page,
    title,
  }: IArguments): Promise<ISearchBooksApi> {
    const { data } = await this.api.get<ISearchBooksApi>(
      `/search/${title}/${page}`
    );
    return data;
  }
}

export const bookApi = new BookService();
