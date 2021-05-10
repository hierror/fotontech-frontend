import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--selected"
          to="/home"
        >
          <span className="navbar__link__icon">
            <BiHomeAlt />
          </span>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--selected"
          to="/books/add"
        >
          <span className="navbar__link__icon">
            <AiOutlinePlus />
          </span>
          <span>Add Book</span>
        </NavLink>
      </li>
      <li>
        <div className="navbar__link navbar__link--disabled">
          <span className="navbar__link__icon">
            <BsPerson />
          </span>
          <span>Profile</span>
        </div>
      </li>
    </ul>
  </nav>
);

export default Navbar;
