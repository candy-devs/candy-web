import React from "react";
import "./RankList.scss";

type RankListItemProps = {
  rank: string,
  name: string,
  variance: number,
};

function RankListItem({ rank, name, variance }: RankListItemProps) {
  return (
    <div>
      <div className="rank-list-item">
        <div className="rank-list-leading">
          {rank}
          <div className="rank-list-leading-name">{name}</div>
        </div>
        <div className="rank-list-variance">
          {Math.abs(variance)}
          {variance === 0 ? null : (
            <div
              className={`rank-list-variance-triangle rank-list-variance-triangle-${variance > 0 ? "up" : "down"
                }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function RankList() {
  return (
    <div className="rank-list">
      <RankListItem rank="1" name="정치 사회" variance={20} />
      <RankListItem rank="2" name="코인" variance={30} />
      <RankListItem rank="3" name="주식" variance={6} />
      <RankListItem rank="4" name="여행" variance={-12} />
      <RankListItem rank="5" name="축구" variance={-12} />
      <RankListItem rank="6" name="비지니스 경제" variance={-12} />
    </div>
  );
}
