import React, { useState } from 'react';
import './Main.scss';

import dataFromServer from '../../api/articles.json';

import { Weather } from '../Weather/Weather';
import { Content } from '../Content/Content';

export const Main = () => {
  const [articles, setArticles] = useState(dataFromServer);

  const filterArticle = (inputValue) => {
    const filtered = {
      newArticle: [],
      topArticle: [],
      interesting: [],
    };

    filtered.newArticle = dataFromServer.newArticle.filter(article => (
      article.title.toLowerCase().includes(inputValue.toLowerCase())
      || article.text.toLowerCase().includes(inputValue.toLowerCase())
    ));

    filtered.topArticle = dataFromServer.topArticle.filter(article => (
      article.title.toLowerCase().includes(inputValue.toLowerCase())
      || article.text.toLowerCase().includes(inputValue.toLowerCase())
    ));

    filtered.interesting = dataFromServer.interesting.filter(article => (
      article.title.toLowerCase().includes(inputValue.toLowerCase())
      || article.text.toLowerCase().includes(inputValue.toLowerCase())
    ));

    setArticles(filtered);
  };

  return (
    <main className="main">
      <div className="content">
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
        <nav className="main__nav-mob">
          <a className="main__nav-link" href="#home">Home</a>
        </nav>
        <Weather filterArticle={filterArticle} />
        <Content data={articles} />
      </div>
    </main>
  );
};
