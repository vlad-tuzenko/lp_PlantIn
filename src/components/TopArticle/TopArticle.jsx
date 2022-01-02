import React from 'react';
import uniqid from 'uniqid';
import './TopArticle.scss';

export const TopAricle = ({ articles }) => (
  <div className="TopArticle">
    <div className="TopArticle__title">TOP of the Day</div>
    <div className="TopArticle__content">
      {articles.map(article => (
        <div className="TopArticle__article" key={uniqid()}>
          <img
            className="TopArticle__article-img"
            src={article.img}
            alt="Article"
          />
          <div className="TopArticle__article-date">{article.date}</div>
          <h3 className="TopArticle__article-title">{article.title}</h3>
          <p className="TopArticle__article-text">{article.text}</p>
        </div>
      ))}
    </div>
  </div>
);
