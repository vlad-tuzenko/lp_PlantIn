/* eslint-disable react/prop-types */
import React from 'react';
import './Interesting.scss';

export const Interesting = ({ articles }) => {
  const a = 'interesting';

  // eslint-disable-next-line no-console
  console.log(a);

  return (
    <div className="Interesting">
      <div className="Interesting__title">Interesting</div>
      <ul className="Interesting__list">
        {articles.map(article => (
          <li className="Interesting__item">
            <img
              className="Interesting__item-img"
              src={article.img}
              alt="Article"
            />
            <div className="Interesting__item-date">{article.date}</div>
            <h3 className="Interesting__item-title">{article.title}</h3>
            <p className="Interesting__item-text">{article.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
