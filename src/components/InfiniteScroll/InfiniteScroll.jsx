import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export const InfiniteScroll = ({ data }) => {
  const [articles, setArticles] = useState(data);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [articles]);

  const scrollHandler = (event) => {
    const { documentElement } = event.target;

    if (
      documentElement.scrollHeight
      - documentElement.scrollTop
      - window.innerHeight < 75
    ) {
      setArticles([...articles, ...data]);
    }
  };

  return (
    <div className="Interesting">
      <ul className="Interesting__list">
        {articles.map(article => (
          <li className="Interesting__item" key={uniqid()}>
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
