import React, { MouseEvent, ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSadCry } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Book, Books } from '../../types/Books';
import { findAllBooks } from '../../services/api';
import './Home.scss';
import 'font-awesome/css/font-awesome.min.css';

const BOOK_INC: number = 6;

interface Data {
  books: Books;
  index: number;
  error: boolean;
}

const Home = () => {
  const [data, setData] = useState<Data>({
    books: [],
    index: -1,
    error: false
  });
  const [library, setLibrary] = useState<Books>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const loadMoreBooks = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const numberOfBooks = data.index + BOOK_INC;
    const len = data.books.length;

    setData({
      books: data.books,
      index: numberOfBooks < len ? numberOfBooks : len,
      error: false
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    setSearchValue(term);
  };

  const filterSearch = (arr: Books, str: string): Books => {
    const regex: RegExp = new RegExp(str, 'i');

    return arr.filter(
      (curr) => regex.test(curr.name) || regex.test(curr.author)
    );
  };

  const fetchData = async (): Promise<void> => {
    let newBooks: Books | undefined;

    try {
      newBooks = await findAllBooks();
    } catch (err) {
      setData({
        books: data.books,
        index: data.index,
        error: true
      });
    }

    if (newBooks)
      setData({
        books: newBooks,
        index: 6,
        error: false
      });
  };

  useEffect(() => {
    if (searchValue === '') {
      setLibrary(data.books);
    } else {
      setLibrary(filterSearch(data.books, searchValue));
    }
  }, [searchValue, data.books]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container container--column">
        <header>
          <SearchBar value={searchValue} handleChange={handleSearchChange} />
          <div className="greeting">
            <h1 className="greeting__message">
              Hi, <span>Mehmed Al Fatih</span> 👋
            </h1>
          </div>
        </header>
        <main className="library">
          {data.error ? (
            <div className="library__error">
              <p className="library__error__message">
                We couldn&apos;t find the books{' '}
                <span>
                  <FaSadCry />
                </span>
              </p>
            </div>
          ) : (
            <div className="library__grid">
              {library.slice(0, data.index).map((book) => {
                const { _id, name, author, description, img }: Book = book;

                return (
                  <Link key={_id} to={`/books/${_id}`}>
                    <BookCard
                      _id={_id}
                      name={name}
                      author={author}
                      description={description}
                      img={img}
                    />
                  </Link>
                );
              })}
            </div>
          )}
          {data.index >= data.books.length || searchValue ? (
            ''
          ) : (
            <button
              className="library__button"
              type="button"
              onClick={loadMoreBooks}
            >
              Load more
            </button>
          )}
        </main>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
