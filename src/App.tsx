// import logo from './logo.svg';
// import './App.css';
import React, { useMemo, useState } from 'react';
import HotPage from './pages/hotPage/HotPage';
import { RecentPage } from './pages/recentPage/RecentPage';
import UserPage from './pages/userPage/UserPage';
import "./App.scss";
import Navigation from './pages/common/Navigation';
import BottomNavigation from './pages/common/BottomNavigation';

function App() {
  const [page, setPage] = useState(2);

  const onChange = function (index: number) {
    setPage(index);
  };

  const pages = [<div key={0} />, <RecentPage key={1} />, <HotPage key={2} />, <UserPage key={3} />, <div key={4} />];

  // const currentPage = useMemo(() => pages[page], [pages]);

  return (
    <div>
      <Navigation initialPage={2} onChange={onChange} />
      <BottomNavigation />
      <div style={{ paddingTop: "90px", paddingBottom: "43px" }}>
        {pages.map((e, index) => <div style={{ display : index === page ? "" : "none" }}> {e} </div>)}
      </div>
    </div>
  );
}

export default App;
