import React from 'react';
import './MenuMobile.scss';

export const MenuMobile = () => (
  <div className="MenuMobile">
    <nav className="MenuMobile__nav">
      <ul className="MenuMobile__nav-list">
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#discover">Discover</a>
        </li>
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#my-plants">My Plants</a>
        </li>
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#diseases">Diseases</a>
        </li>
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#blog">Blog</a>
        </li>
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#faq">FAQ</a>
        </li>
        <li className="MenuMobile__nav-item">
          <a className="MenuMobile__nav-link" href="#contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
);
