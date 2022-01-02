import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Footer />
  </div>
);
