import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Book, Books } from '../types/Books';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_REST_URL,
  timeout: 1000,
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.toJSON());

    return Promise.reject(error.message);
  }
);

export const createNewBook = async (book: Book): Promise<Boolean> => {
  let success: Boolean = false;
  const { status }: AxiosResponse<any> = await api.post('/books', book);

  if (status === 200) success = true;

  return success;
};

export const findAllBooks = async () => {
  const { data }: AxiosResponse<any> = await api.get<Books>('/books');

  const books: Books = data.body;

  return books;
};

export const findOneBook = async (bookId: string) => {
  const { data }: AxiosResponse<any> = await api.get<Book>(`/books/${bookId}`);

  const [book]: Books = data.body;

  return book;
};
