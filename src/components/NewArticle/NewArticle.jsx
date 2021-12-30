import React from 'react';
import './NewArticle.scss';

export const NewArticle = () => (
  <div className="NewArticle">
    <img className="NewArticle__logo" src="/images/new_badge.svg" alt="New" />
    <div className="NewArticle__content">
      <img
        className="NewArticle__img"
        src="/images/new_article.png"
        alt="Article"
      />
      <div className="NewArticle__article">
        <div className="NewArticle__date">Feb 23 · 8 min read</div>
        <h2 className="NewArticle__title">Tips &amp; Tricks For Cutting</h2>
        <p className="NewArticle__text">
          Pruning, like any other skill, requires knowing
          what you are doing to achieve success.
          The old idea that anyone with a chain saw or a pruning
          saw can be a landscape pruner is far from the truth.
          More trees are killed or ruined each year from
          improper pruning than by pests.
          Remember that pruning is the removal or...
        </p>
      </div>
    </div>
  </div>

);
