import React from 'react';

const AddBook = () => {
  console.log(process.env);

  return (
    <>
      <div>
        <h1>Add a new book</h1>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="name">
              Name
              <input name="name" id="name" type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              Author
              <input name="author" id="author" type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Author
              <textarea name="description" id="description" />
            </label>
          </div>
          <input type="submit" value="Add new book" />
        </form>
      </div>
    </>
  );
};

export default AddBook;
