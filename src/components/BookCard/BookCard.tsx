import React from 'react';
import { Book } from '../../types/books';
import './BookCard.scss';

const BookCard = ({ name, author, img }: Book) => {
  const getImagePath = (file: string): string => {
    const url: string =
      process.env.REACT_APP_IMG_BASE_URL || `${process.env.PUBLIC_URL}/covers/`;
    let path = file;

    if (file === '') path = 'placeholder.jpg';

    return `${url}/${path}`;
  };

  return (
    <div className="book-card">
      <div className="book-card__img">
        <img src={getImagePath(img)} alt={name} width="400" height="560" />
      </div>
      <div className="book-card__info">
        <span className="book-card__info__name">{name}</span>
        <span className="book-card__info__author">{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
