import React from 'react';
import { Book } from '../../types/Books';
import { getImagePath } from '../../utils';
import './BookCard.scss';

const BookCard = ({ name, author, img = '' }: Book) => (
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

export default BookCard;
