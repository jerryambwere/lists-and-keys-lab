import React from 'react';

const NavBar = () => {
  const links = ['home', 'about', 'contact']; // Example array of link names

  return (
    <nav>
      {links.map((link, index) => (
        <a href={`#${link}`} key={index}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
