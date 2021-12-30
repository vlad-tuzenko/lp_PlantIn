import React from 'react';
import './Content.scss';

import { NewArticle } from '../NewArticle/NewArticle';
import { TopAricle } from '../TopArticle/TopArticle';
import { Interesting } from '../Interesting/Interesting';
import { Promo } from '../Promo/Promo';

export const Content = () => {
  const articles = [
    {
      img: '/images/interesting1.png',
      date: 'Feb 23 · 8 min read',
      title: 'Watering mastery',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
    {
      img: '/images/interesting2.png',
      date: 'Feb 23 · 8 min read',
      title: 'Plant pot secrets',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
    {
      img: '/images/interesting3.png',
      date: 'Feb 23 · 8 min read',
      title: 'Professional Repot',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
    {
      img: '/images/interesting1.png',
      date: 'Feb 23 · 8 min read',
      title: 'Watering mastery',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
    {
      img: '/images/interesting2.png',
      date: 'Feb 23 · 8 min read',
      title: 'Plant pot secrets',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
    {
      img: '/images/interesting3.png',
      date: 'Feb 23 · 8 min read',
      title: 'Professional Repot',
      text: 'Repotting a plant can seem like a difficult task'
        + 'because a lot of things can go wrong – you can damage...',
    },
  ];

  return (
    <>
      <NewArticle />
      <TopAricle />
      <Interesting articles={articles} />
      <Promo />
    </>
  );
};
