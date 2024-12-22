import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <div>
      <button className="nav" onClick={toggleMenu}>| | |</button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Install</button>
        </nav>
      )}
    </div>
  );
};

export default Nav;