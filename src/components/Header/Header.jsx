import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="Header">
    <div className="Header__side">
      <a href="#home">
        <img
          className="Header__logo logo"
          src="/images/logo.svg"
          alt="Plant In"
        />
      </a>
      <nav className="Header__nav">
        <ul className="Header__nav-list">
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#discover">Discover</a>
          </li>
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#my-plants">My Plants</a>
          </li>
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#diseases">Diseases</a>
          </li>
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#blog">Blog</a>
          </li>
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#faq">FAQ</a>
          </li>
          <li className="Header__nav-item">
            <a className="Header__nav-link" href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="Header__side">
      <img className="search" src="/images/search.svg" alt="search" />
      <img className="user" src="/images/user.svg" alt="user" />
    </div>
  </header>
);
