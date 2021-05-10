import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';

import { Book, Books } from '../../types/Books';
import { findAllBooks } from '../../services/api';

import './Home.scss';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  const [data, setData] = useState<Record<string, Books>>({ books: [] });
  const [books, setBooks] = useState<Books>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  console.log('render');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    setSearchValue(term);
  };

  const filterSearch = (arr: Books, str: string): Books => {
    const regex: RegExp = new RegExp(str, 'i');

    return arr.filter((curr) => regex.test(curr.name));
  };

  const fetchData = async (): Promise<void> => {
    const library: Books | undefined = await findAllBooks();

    if (library !== undefined) setData({ books: library });
  };

  useEffect(() => {
    if (searchValue === '') {
      setBooks(data.books);
    } else {
      setBooks(filterSearch(data.books, searchValue));
    }
  }, [searchValue, data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container container--column">
        <SearchBar value={searchValue} handleChange={handleSearchChange} />
        <div className="greeting">
          <h1 className="greeting__message">
            Hi, <span>Mehmed Al Fatih</span> 👋
          </h1>
        </div>
        <main className="book__grid">
          {books.map((book) => {
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
        </main>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
