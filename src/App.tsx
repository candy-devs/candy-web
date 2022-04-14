// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import HotPage from './pages/hotPage/HotPage';
import { RecentPage } from './pages/recentPage/RecentPage';
import UserPage from './pages/userPage/UserPage';
import "./App.scss";
import Navigation from './pages/common/Navigation';

function App() {
  const [page, setPage] = useState(2);

  const onChange = function (index: number) {
    setPage(index);
  };

  const pages = [<div/>, <RecentPage/>, <HotPage/>, <UserPage/>, <div/>];

  return (
    <div>
      <Navigation initialPage={2} onChange={onChange}/>
      {pages[page]}
    </div>
  );
}

export default App;
