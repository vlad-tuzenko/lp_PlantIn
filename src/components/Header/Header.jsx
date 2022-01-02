import React, { useState } from 'react';
import './Header.scss';

import { MenuMobile } from '../MenuMobile/MenuMobile';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="Header">
      <div className="Header__side">
        <a href="#home">
          <img
            className="Header__logo logo"
            src="./images/logo.svg"
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
        <a href="#weather__search">
          <img className="search" src="./images/search.svg" alt="search" />
        </a>
        <img className="user" src="./images/user.svg" alt="user" />
        <a href="#menu" onClick={() => setMenuOpened(current => !current)}>
          <img
            className="menu"
            src="./images/menu_mob.svg"
            alt="menu"
          />
        </a>
      </div>
      {menuOpened && <MenuMobile />}
    </header>
  );
};
