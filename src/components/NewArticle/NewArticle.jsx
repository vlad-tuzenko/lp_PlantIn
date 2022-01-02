import React from 'react';
import uniqid from 'uniqid';
import './NewArticle.scss';

export const NewArticle = ({ articles }) => (
  <div className="NewArticle">
    <img
      className="NewArticle__logo"
      src="./images/new_badge.svg"
      alt="New"
    />
    {articles.map(article => (
      <div className="NewArticle__content" key={uniqid()}>
        <img
          className="NewArticle__img"
          src={article.img}
          alt="Article"
        />
        <div className="NewArticle__article">
          <div className="NewArticle__date">{article.date}</div>
          <h2 className="NewArticle__title">{article.title}</h2>
          <p className="NewArticle__text">{article.text}</p>
        </div>
      </div>
    ))}
  </div>

);
