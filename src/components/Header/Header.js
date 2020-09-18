import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css';

const Header = () => {
  return (
    <div className = 'header'>
      <h1> Welcome to the world of digital courses </h1>
      <img  src= {logo} alt=""/>
    </div>
  );
};

export default Header;