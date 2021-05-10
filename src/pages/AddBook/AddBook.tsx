import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { BiErrorCircle } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import { createNewBook } from '../../services/api';
import './AddBook.scss';

interface FormErrorProps {
  message: string;
}

interface FormData {
  name: string;
  author: string;
  description: string;
}

const FormError = ({ message }: FormErrorProps) => (
  <span className="form__error" role="alert">
    <BiErrorCircle /> {message}
  </span>
);

const AddBook = () => {
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    createNewBook(data);

    history.push('/home');
  };

  return (
    <>
      <div className="container container--column">
        <div className="title">
          <h1>Add a new book</h1>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                className="form__input-text"
                id="name"
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'The name of the book is required'
                  },
                  minLength: {
                    value: 1,
                    message:
                      'The name of the book must be more than 1 character'
                  }
                })}
              />
              {errors.name?.message && (
                <FormError message={errors.name.message} />
              )}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="author">
                Author
              </label>
              <input
                className="form__input-text"
                id="author"
                type="text"
                {...register('author', {
                  required: {
                    value: true,
                    message: 'The author of the book is required'
                  },
                  minLength: {
                    value: 3,
                    message:
                      'The author of the book must be more than 3 characters'
                  }
                })}
              />
              {errors.author?.message && (
                <FormError message={errors.author.message} />
              )}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form__text-area"
                id="description"
                rows={6}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'The description of the book is required'
                  },
                  minLength: {
                    value: 50,
                    message:
                      'The description of the book must be more than 50 characters'
                  },
                  maxLength: {
                    value: 500,
                    message:
                      'The description of the book must be less than 500 characters'
                  }
                })}
              />
              {errors.description?.message && (
                <FormError message={errors.description.message} />
              )}
            </div>
            <input
              className="form__submit"
              type="submit"
              value="Add new book"
            />
          </form>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default AddBook;
