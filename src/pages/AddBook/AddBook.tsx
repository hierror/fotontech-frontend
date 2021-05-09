import React from 'react';
import './AddBook.scss';

const AddBook = () => {
  console.log(process.env);

  return (
    <>
      <div className="title">
        <h1>Add a new book</h1>
      </div>
      <div className="form-wrapper">
        <form className="form">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input-text"
              name="name"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="author">
              Author
            </label>
            <input
              className="form__input-text"
              name="author"
              id="author"
              type="text"
              required
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form__text-area"
              name="description"
              id="description"
              rows={6}
              required
            />
          </div>
          <input className="form__submit" type="submit" value="Add new book" />
        </form>
      </div>
    </>
  );
};

export default AddBook;
