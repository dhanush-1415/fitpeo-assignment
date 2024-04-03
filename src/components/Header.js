import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleNavbar}>
        {isOpen ? 'Close Navbar' : 'Open Navbar'}
      </button>
      <ul className="navbar-menu">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        {/* Add more navbar menu items here */}
      </ul>
    </div>
  );
};

export default Navbar;
