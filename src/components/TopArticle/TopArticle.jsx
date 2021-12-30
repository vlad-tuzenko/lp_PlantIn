import React from 'react';
import './TopArticle.scss';

export const TopAricle = () => (
  <div className="TopArticle">
    <div className="TopArticle__title">TOP of the Day</div>
    <div className="TopArticle__content">
      <div className="TopArticle__article">
        <img
          className="TopArticle__article-img"
          src="/images/topArticle1.png"
          alt="Article"
        />
        <div className="TopArticle__article-date">Feb 23 · 8 min read</div>
        <h3 className="TopArticle__article-title">Professional Repot</h3>
        <p className="TopArticle__article-text">
          Repotting a plant can seem like a difficult task
          because a lot of things can go wrong – you can damage...
        </p>
      </div>
      <div className="TopArticle__article">
        <img
          className="TopArticle__article-img"
          src="/images/topArticle2.png"
          alt="Article"
        />
        <div className="TopArticle__article-date">Feb 23 · 8 min read</div>
        <h3 className="TopArticle__article-title">Professional Repot</h3>
        <p className="TopArticle__article-text">
          Repotting a plant can seem like a difficult task
          because a lot of things can go wrong – you can damage...
        </p>
      </div>
    </div>
  </div>
);
