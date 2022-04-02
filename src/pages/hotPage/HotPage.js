import React from 'react';
import ArticleHeaderItem from './../../components/ArticleHeaderItem';
import Navigation from './Navigation';
import './ArticlePage.css';

function App() {
  return (
    <div>
      <Navigation/>
      <ArticleHeaderItem/>
      <ArticleHeaderItem/>
      <ArticleHeaderItem/>
    </div>
  );
}

export default App;
