import React from 'react';

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => <nav>{children}</nav>;
export default Navbar;
