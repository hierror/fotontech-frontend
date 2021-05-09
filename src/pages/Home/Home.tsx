import React, { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';

import { Book, Books } from '../../types/books';
import { findAllBooks } from '../../services/api';

import './Home.scss';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  const [data, setData] = useState<Record<string, Books>>({ books: [] });

  const fetchData = async (): Promise<void> => {
    const books: Books | undefined = await findAllBooks();

    if (books !== undefined) setData({ books });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="greeting">
        <h1 className="greeting__message">
          Hi, <span>Mehmed Al Fatih</span> 👋
        </h1>
      </div>
      <main className="book__grid">
        {data.books.map((book) => {
          const { _id, name, author, description, img }: Book = book;

          return (
            <BookCard
              key={_id}
              _id={_id}
              name={name}
              author={author}
              description={description}
              img={img}
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
