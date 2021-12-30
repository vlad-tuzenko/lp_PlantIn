import React from 'react';
import './Main.scss';

import { Weather } from '../Weather/Weather';
import { Content } from '../Content/Content';

export const Main = () => (
  <main className="main">
    <div className="main__content">
      <nav className="main__nav">
        <ul className="main__nav-list">
          <li className="main__nav-item">
            <a className="main__nav-link" href="#home">Home</a>
          </li>
          <li className="main__nav-item">
            <a className="main__nav-link" href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
      <Weather />
      <Content />
    </div>
  </main>
);
