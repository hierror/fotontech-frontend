import React, { useEffect, useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import { Book, Books } from '../../types/books';
import { findAllBooks } from '../../services/api';

const Home = () => {
  console.log(process.env);

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
      <div>
        <input type="search" placeholder="Search books" />
      </div>
      <div>
        <h1>Hi, Mehmed Al Fatih 👋</h1>
      </div>
      <main>
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
