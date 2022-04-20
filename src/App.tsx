// import logo from './logo.svg';
// import './App.css';
import React, { useMemo, useState } from "react";
// import HotTab from './pages/home/hotTab/HotTab';
import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/home/Home";

function App() {
  const [page, setPage] = useState(2);

  const onChange = function (index: number) {
    setPage(index);
  };

  // const pages = [<div key={0} />, <RecentTab key={1} />, <HotTab key={2} />, <MyTab key={3} />, <UserTab key={4} />];

  // const currentPage = useMemo(() => pages[page], [pages]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
