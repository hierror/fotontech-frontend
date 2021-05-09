import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
  <div className="search">
    <input
      className="search__input"
      type="search"
      placeholder="&#xf002; Search books"
    />
  </div>
);
export default SearchBar;
