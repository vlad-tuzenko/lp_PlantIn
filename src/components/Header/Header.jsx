import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__side">
      <a href="#home">
        <img className="logo" src="/images/logo.svg" alt="Plant In" />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#discover">Discover</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#my-plants">My Plants</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#diseases">Diseases</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#blog">Blog</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#faq">FAQ</a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header__side">
      <img className="search" src="/images/search.svg" alt="search" />
      <img className="user" src="/images/user.svg" alt="user" />
    </div>
  </header>
);
