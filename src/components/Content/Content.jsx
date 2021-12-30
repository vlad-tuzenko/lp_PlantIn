import React from 'react';
import './Content.scss';

import { NewArticle } from '../NewArticle/NewArticle';

export const Content = () => {
  const a = 10;

  // eslint-disable-next-line no-console
  console.log(a);

  return (
    <NewArticle />
  );
};
