import React from 'react';
import './Content.scss';

import { NewArticle } from '../NewArticle/NewArticle';
import { TopAricle } from '../TopArticle/TopArticle';
import { Interesting } from '../Interesting/Interesting';
import { NoArticles } from '../NoArticles/NoArticles';
import { Promo } from '../Promo/Promo';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';

export const Content = ({ data }) => {
  const { newArticle, topArticle, interesting } = data;

  return (
    <>
      {newArticle.length > 0 && <NewArticle articles={newArticle} />}
      {topArticle.length > 0 && <TopAricle articles={topArticle} />}
      {interesting.length > 0 && <Interesting articles={interesting} />}
      {newArticle.length === 0
      && topArticle.length === 0
      && interesting.length === 0
      && <NoArticles />}
      <Promo />
      {interesting.length === 6 && <InfiniteScroll data={interesting} />}
    </>
  );
};
