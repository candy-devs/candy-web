// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import HotTab from "./hotTab/HotTab";
import { RecentTab } from "./recentTab/RecentTab";
import UserTab from "./userTab/UserTab";
import Navigation from "../common/Navigation";
import BottomNavigation from "../common/BottomNavigation";
import MyTab from "./myTab/MyTab";

function HomePage() {
  const [page, setPage] = useState(2);

  const onChange = function (index: number) {
    setPage(index);
  };

  const pages = [
    <div key={0} />,
    <RecentTab key={1} />,
    <HotTab key={2} />,
    <MyTab key={3} />,
    <UserTab key={4} />,
  ];

  // const currentPage = useMemo(() => pages[page], [pages]);

  return (
    <div>
      <Navigation initialPage={2} onChange={onChange} />
      <BottomNavigation />
      <div style={{ paddingTop: "90px", paddingBottom: "43px" }}>
        {pages.map((e, index) => (
          <div style={{ display: index === page ? "" : "none" }}> {e} </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
