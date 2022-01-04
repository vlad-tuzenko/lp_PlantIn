import React from 'react';
import './NoArticles.scss';

export const NoArticles = () => (
  <div className="NoArticles">
    <div className="NoArticles__content">
      <h2 className="NoArticles__title">
        We are sorry
      </h2>
      <p className="NoArticles__text">
        Unfortunately, we did not find an article with this text...
      </p>
    </div>
    <img
      className="NoArticles__img"
      src="./images/NoArticles.png"
      alt="NoArticles"
    />
  </div>
);
