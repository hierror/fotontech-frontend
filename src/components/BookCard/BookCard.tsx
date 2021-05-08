import React from 'react';
import { Book } from '../../types/books';

const BookCard = ({ name, author, img }: Book) => {
  const getImagePath = (file: string): string => {
    const url: string =
      process.env.REACT_APP_IMG_BASE_URL || `${process.env.PUBLIC_URL}/covers/`;
    let path = file;

    if (file === '') path = 'placeholder.jpg';

    return `${url}/${path}`;
  };

  return (
    <div>
      <img src={getImagePath(img)} alt={img} />
      <div>
        <span>{name}</span>
        <span>{author}</span>
      </div>
    </div>
  );
};

export default BookCard;
