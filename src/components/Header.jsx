import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', padding: '10px' }}>
      <div className="logo" style={{ color: 'white', textAlign: 'left' }}>
        <h1>LOGO</h1>
      </div>
      <nav style={{ textAlign: 'right' }}>
        <Link to="/" style={{ color: 'white',margin: '0 10px' }}>home</Link>
        <Link to="/page1" style={{ color: 'white',margin: '0 10px' }}>Page 1</Link>
        <Link to="/page2" style={{ color: 'white', margin: '0 10px' }}>Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;
