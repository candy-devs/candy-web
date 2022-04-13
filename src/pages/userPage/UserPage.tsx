import React, { useState } from "react";
import NavigationTab from "../../components/NavigationTab";
import AppBar from "../common/AppBar";
import ArticleList from "./ArticleList";
import Profile from "./Profile";
import './UserPage.scss';

export default function UserPage() {
  const [index, setIndex] = useState(0);

  const onChange = function (index: number) {
    setIndex(index);
  };

  const pages= [<ArticleList/>];

  return (
    <div className="userpage">
      <AppBar />
      <Profile />
      <NavigationTab items={["게시글", "댓글", "방명록"]} onChange={onChange}/>
      {pages[index]}
    </div>
  );
}
