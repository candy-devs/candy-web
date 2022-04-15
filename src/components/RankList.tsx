import React, { LegacyRef, useCallback, useEffect, useRef } from "react";
import { useState } from "react";
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

function RankListPage() {
  // const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  // ref.current.style.setProperty("--rank-list-page-width", `100px`);

  return <div className="rank-list-page">
    <RankListItem rank="1" name="정치 사회" variance={20} />
    <RankListItem rank="2" name="코인" variance={30} />
    <RankListItem rank="3" name="주식" variance={6} />
    <RankListItem rank="4" name="여행" variance={-12} />
    <RankListItem rank="5" name="축구" variance={-12} />
    {/* <RankListItem rank="6" name="비지니스 경제" variance={-12} /> */}

  </div>
}

export default function RankList() {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      // setHeight(node.getBoundingClientRect().height);
      // const { style } = ref.current;
      // style.setProperty("--rank-list-page-width", `${node.getBoundingClientRect().height}px`);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    const { style } = ref.current;
    style.setProperty("--rank-list-page-width", `${width}px`);
  }, [ref, width]);

  const resize = (node: Event) => {
    const { style, clientWidth } = ref.current;
    style.setProperty("--rank-list-page-width", `${clientWidth}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [ref]);

  return (
    <div ref={ref} className="rank-list-wrapper">
      <div ref={measuredRef} className="rank-list">
        <RankListPage />
        <RankListPage />
        <RankListPage />
        <RankListPage />
      </div>
    </div>
  );
}
