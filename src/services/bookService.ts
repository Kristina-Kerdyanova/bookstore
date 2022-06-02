import axios from "axios";
import { IBookDetailsApi, INewBooks, ISearchBooksApi } from "../store/types";

class BookService {
  private readonly API_URL = "https://api.itbook.store/1.0";
  private api = axios.create({
      baseURL: this.API_URL,
  });

  public async getBooks(): Promise<INewBooks> {
      const {data} = await this.api.get<INewBooks>('new');
      return data;
  }

  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.api.get<IBookDetailsApi>(`/books/${isbn}`);
    return data;
  }

  public async getBooksBySearch(
    title: string,
    page: string
  ): Promise<ISearchBooksApi> {
    const { data } = await this.api.get<ISearchBooksApi>(
      `/search/${title}/${page}`
    );
    return data;
  }
}




export const bookApi = new BookService();
