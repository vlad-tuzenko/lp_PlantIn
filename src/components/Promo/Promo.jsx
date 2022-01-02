import React from 'react';
import './Promo.scss';

export const Promo = () => (
  <div className="Promo">
    <div className="Promo__content">
      <a href="#home">
        <img
          className="Promo__logo logo"
          src="./images/logo.svg"
          alt="Plant In"
        />
      </a>
      <h2 className="Promo__title">
        Get unlimited access to exclusive articles
      </h2>
      <p className="Promo__text">
        Get rid of limits and read everything you wish
      </p>
      <button type="button" className="Promo__button">Try For Free</button>
    </div>
    <img className="Promo__img" src="./images/promo.png" alt="Promo" />
  </div>
);
