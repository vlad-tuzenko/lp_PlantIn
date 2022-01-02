import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="content Footer__content">
      <nav className="Footer__nav">
        <ul className="Footer__list">
          <li className="Footer__item">
            <a className="Footer__link" href="#terms">Terms of Service</a>
          </li>
          <li className="Footer__item">
            <a className="Footer__link" href="#privacy">Privacy Policy</a>
          </li>
          <li className="Footer__item">
            <a className="Footer__link" href="#policy">Subscription Policy</a>
          </li>
        </ul>
      </nav>
      <span className="Footer__text">
        ©Copyright  © 2020 PlantIn. All rights reserved
      </span>
    </div>
  </footer>
);
