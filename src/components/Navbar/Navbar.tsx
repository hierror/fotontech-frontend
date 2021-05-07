import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

// interface NavbarProps {
//   children: React.ReactNode;
// }

const Navbar = () => {
  const x = 1;

  console.error(x);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">
            <span>
              <BiHomeAlt />
            </span>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/books/add">
            <span>
              <AiOutlinePlus />
            </span>
            <span>Add Book</span>
          </NavLink>
        </li>
        <li>
          <div>
            <span>
              <BsPerson />
            </span>
            <span>Profile</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
