import "./ArticleHeaderItem.scss";
import React from "react";
import { ChatIcon, HeartIcon, ThumbUpIcon } from "../assets/Icons";

export default function ArticleHeaderItem() {
  return (
    <article class="article-header-item">
      <div class="article-hearder-item-outer-up">
        <div className="article-header-item-profile-img" />
        <div className="article-header-item-profile-name">박근혜</div>
        <div className="article-header-item-tag">#설거지론</div>
      </div>
      <div class="article-hearder-item-outer-mid">
        <div class="aritcle-header-item-inner-left">
          <div class="article-header-title">배팅자리만 알면 뭐하나</div>
          <div class="article-header-body">
            <div class="article-header-body-text">
              역방향인데... 이번 3월말 트레이딩 자리잡을곳을 알고도 방향 잡기
              정말 어렵네요. 그나마 오전에 시그널 떠줘서 고배포지션 익절해놔서
              다행입
            </div>
          </div>
        </div>
        <div class="aritcle-header-item-inner-right">
          <div class="article-header-body-thumb"></div>
        </div>
      </div>
      <div class="aritcle-header-item-inner-bottom">
        <p>
          정치사회
          <span>&#183;</span>
          2시간 전
        </p>
        <div class="article-header-item-status">
          <div class="article-header-item-stat">
            <div class="article-header-item-stat-icon">
              <ThumbUpIcon />
            </div>
            <p>13K</p>
            <div class="article-header-item-stat-icon">
              <ChatIcon />
            </div>
            <p>498</p>
            <div class="article-header-item-stat-icon">
              <HeartIcon />
            </div>
            <p>128</p>
          </div>
          <div class="article-header-item-menu">&#8942;</div>
        </div>
      </div>
    </article>
  );
}
