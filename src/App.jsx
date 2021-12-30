import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App = () => (
  <body className="body">
    <Header />
    <Main />
  </body>
);
