import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUpload } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
import { FaHeadphones } from 'react-icons/fa';
import { findOneBook } from '../../services/api';
import { Book } from '../../types/books';
import './ViewBook.scss';
import { getImagePath } from '../../utils';

interface ParamsTypes {
  // This is a param and not a variable, so it's better to stay in Snake Case
  // eslint-disable-next-line camelcase
  book_id: string;
}

const ViewBook = () => {
  const { book_id: bookId } = useParams<ParamsTypes>();
  const [book, setBook] = useState<Book>({
    name: '',
    author: '',
    description: ''
  });

  const fetchData = async (): Promise<void> => {
    const data: Book | undefined = await findOneBook(bookId);

    if (data !== undefined) setBook(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="book-hero">
        <div className="container container--column">
          <div className="book-hero__return">
            <Link to="/home">
              <FiArrowLeft />
            </Link>
          </div>
          <div className="book-hero__img">
            <img
              src={getImagePath(book.img)}
              alt={book.name}
              width="400"
              height="560"
            />
          </div>
        </div>
      </div>
      <article className="container container--column book-info">
        <h1 className="book__name">{book.name}</h1>
        <span className="book__author">{book.author}</span>
        <p className="book__description">{book.description}</p>

        <div className="interactions-wrapper">
          <div className="interactions">
            <ul>
              <li className="interactions__link">
                <span className="interactions__link__icon">
                  <BsBook />
                </span>
                <span>Read</span>
              </li>
              <li aria-hidden="true">|</li>
              <li className="interactions__link">
                <span className="interactions__link__icon">
                  <FaHeadphones />
                </span>
                <span>Listen</span>
              </li>
              <li aria-hidden="true">|</li>
              <li className="interactions__link">
                <span className="interactions__link__icon">
                  <FiUpload />
                </span>
                <span>Share</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default ViewBook;
