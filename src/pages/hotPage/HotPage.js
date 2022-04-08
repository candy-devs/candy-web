import React from "react";
import ArticleHeaderItem from "./../../components/ArticleHeaderItem";
import IssuseCard from "../../components/IssuseCard";
import Navigation from "./Navigation";
import "./ArticlePage.scss";
import "./HotPage.scss";
import { useRef, useState } from "react";
import CategoryBinarySwitch from "../../components/CategoryBinarySwitch";
import IosSegmentedControl from "../../components/IosSegmentedControl";

function App() {
  return (
    <div>
      <Navigation />
      <div class="nav-box-divider"/>
      <div class="issues-title">오늘의 이슈</div>
      <CategoryBinarySwitch/>
      <IosSegmentedControl 
        name="group-2"
        callback={(val) => {}}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "왼쪽",
            value: "first",
            ref: useRef()
          },
          {
            label: "오른쪽",
            value: "second",
            ref: useRef()
          },
          // {
          //   label: "Third",
          //   value: "third",
          //   ref: useRef()
          // }
        ]}/>
      <div class="issues-area">
        <div class="issues-area-wrap">
          <IssuseCard
            img="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/24/111406642.3.jpg"
            name="# 푸틴"
          />
          <IssuseCard
            img="https://w.namu.la/s/877b2a66a62035941048c47c7c12de1400018278a41936f55e2477ffdb8df112d90f326ce81ceeda9d761229aaafc85405261f1fa07034c0f2268b6db5539ff3bb18d934cb5312594035b303ff62f58d69ec04232c4bd4eaf1534c6c1c2f97de"
            name="# 도라에몽"
          />
          <IssuseCard
            img="https://forum.owlofsogang.com/uploads/default/original/1X/ff093174b01c545c04051d65b276ea0f08ab725b.png"
            name="# 둘리"
          />
          <IssuseCard
            img="https://images.chosun.com/resizer/73unl9PjsYrwp7F3Fmk2rHz_DGM=/2337x1558/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/YNXJOV4SJVKANKFMKHTMSKHYME.jpg"
            name="# 바이든"
          />
          <IssuseCard
            img="http://www.medigatenews.com/file/news/243360"
            name="# 이재명"
          />
          <IssuseCard
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%EC%A4%91%EC%95%99%EC%84%A0%EA%B1%B0%EA%B4%80%EB%A6%AC%EC%9C%84%EC%9B%90%ED%9A%8C_%EC%9C%A4%EC%84%9D%EC%97%B4_%ED%94%84%EB%A1%9C%ED%95%84_%28for_election_infobox%29.png/250px-%EC%A4%91%EC%95%99%EC%84%A0%EA%B1%B0%EA%B4%80%EB%A6%AC%EC%9C%84%EC%9B%90%ED%9A%8C_%EC%9C%A4%EC%84%9D%EC%97%B4_%ED%94%84%EB%A1%9C%ED%95%84_%28for_election_infobox%29.png"
            name="# 윤석열"
          />
        </div>
      </div>
      <ArticleHeaderItem />
      <ArticleHeaderItem />
      <ArticleHeaderItem />
    </div>
  );
}

export default App;
