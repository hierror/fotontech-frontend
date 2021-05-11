import React, { ChangeEventHandler } from 'react';
import './SearchBar.scss';

interface SearchProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ value, handleChange }: SearchProps) => (
  <div className="search">
    <input
      className="search__input"
      type="search"
      placeholder="&#xf002; Search books by name or author"
      value={value}
      onChange={handleChange}
    />
  </div>
);
export default SearchBar;
