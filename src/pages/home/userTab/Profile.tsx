import React from "react";
import SelectButton from "../../../components/SelectButton";
import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-thumbnail" />
      <div className="profile-status">
        <div className="profile-status-unit">
          3천
          <div className="profile-status-figure">게시물</div>
        </div>
        <div className="profile-status-unit">
          2만
          <div className="profile-status-figure">구독자</div>
        </div>
        <div className="profile-status-unit">
          4만
          <div className="profile-status-figure">설탕 </div>
        </div>
      </div>
      <div className="profile-description">
        자기 소개_동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
        만세 무궁화삼천리 화려강산 자기 소개_동해물과 백두산이 마르고 닳도록
        하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람
      </div>

      <div className="profile-functions">
        <div className="profile-function-button">
          <SelectButton content="구독 중" />
        </div>
        <div className="profile-function-divider"/>
        <div className="profile-function-button">
          <SelectButton content="채팅" />
        </div>
        <div className="profile-function-divider"/>
        <div className="profile-function-button">
          <SelectButton content="선물하기" />
        </div>
      </div>
    </div>
  );
}
