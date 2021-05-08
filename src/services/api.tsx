import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Book, Books } from '../types/books';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_REST_URL,
  timeout: 1000
});

export const createNewBook = async (book: Book): Promise<Boolean> => {
  let success: Boolean = false;

  try {
    const { status }: AxiosResponse<any> = await api.post(
      '/books',
      JSON.stringify(book)
    );

    if (status === 200) success = true;
  } catch (err) {
    console.error(err);
  }

  return success;
};

export const findAllBooks = async (): Promise<Books | undefined> => {
  let books: Books | undefined;

  try {
    const { data }: AxiosResponse<any> = await api.get('/books');

    books = data.body;
  } catch (err) {
    console.error(err);
  }

  return books;
};

export const findOneBook = async (
  bookId: string
): Promise<Book | undefined> => {
  let book: Book | undefined;

  try {
    const { data }: AxiosResponse<any> = await api.get(`/books/${bookId}`);

    // if (data.body.length === 0) return undefined;

    [book = undefined] = data.body;
  } catch (err) {
    console.error(err);
  }

  return book;
};
