import React from 'react';
import './Content.scss';

import { NewArticle } from '../NewArticle/NewArticle';
import { TopAricle } from '../TopArticle/TopArticle';
import { Interesting } from '../Interesting/Interesting';
import { Promo } from '../Promo/Promo';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';

export const Content = ({ data }) => {
  const { newArticle, topArticle, interesting } = data;

  return (
    <>
      {newArticle.length > 0 && <NewArticle articles={newArticle} />}
      {topArticle.length > 0 && <TopAricle articles={topArticle} />}
      {interesting.length > 0 && <Interesting articles={interesting} />}
      <Promo />
      {interesting.length > 0 && <InfiniteScroll data={interesting} />}
    </>
  );
};
