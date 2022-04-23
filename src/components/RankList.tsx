import React, {
  LegacyRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useState } from "react";
import "./RankList.scss";

type RankListItemProps = {
  rank: string;
  name: string;
  variance: number;
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
              className={`rank-list-variance-triangle rank-list-variance-triangle-${
                variance > 0 ? "up" : "down"
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

  return (
    <div className="rank-list-page" style={{ padding: "0" }}>
      <RankListItem rank="1" name="정치 사회" variance={20} />
      <RankListItem rank="2" name="코인" variance={30} />
      <RankListItem rank="3" name="주식" variance={6} />
      <RankListItem rank="4" name="여행" variance={-12} />
      <RankListItem rank="5" name="축구" variance={-12} />
      {/* <RankListItem rank="6" name="비지니스 경제" variance={-12} /> */}
    </div>
  );
}

export default function RankList() {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  var onScrollTimer = -1;
  var onMouse = false;
  var onScrolling = false;
  var onScrollLeft = 0;

  useEffect(() => {
    if (ref.current.getBoundingClientRect().width !== 0) {
      const { style } = ref.current;
      setWidth(ref.current.getBoundingClientRect().width);
      style.setProperty(
        "--rank-list-page-width",
        `${ref.current.getBoundingClientRect().width}px`
      );
      scrollRef.current.scrollLeft = Math.round(onScrollLeft / width) * width;
      setPageIndex(Math.round(onScrollLeft / width));
    }
  }, [ref, scrollRef, onScrollLeft, width]);

  const resize = () => {
    const { style, clientWidth } = ref.current;
    if (clientWidth !== 0) {
      setWidth(clientWidth);
      style.setProperty("--rank-list-page-width", `${clientWidth}px`);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [ref]);

  const onScroll = function (event: SyntheticEvent<HTMLDivElement>) {
    onScrolling = true;
    if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
    onScrollTimer = window.setTimeout(onScrollEnd, 100);
    onScrollLeft = event.currentTarget.scrollLeft;
  };

  const onScrollEnd = () => {
    if (onMouse === false && onScrolling) {
      onScrolling = false;
      scrollRef.current.scrollLeft = Math.round(onScrollLeft / width) * width;
      setPageIndex(Math.round(onScrollLeft / width));
    }
  };

  const onMouseDown = () => {
    onMouse = true;
    if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
  };

  const onMouseUp = () => {
    onMouse = false;
    if (onScrollTimer !== -1) clearTimeout(onScrollTimer);
    onScrollTimer = window.setTimeout(onScrollEnd, 100);
  };

  return (
    <div ref={ref} className="rank-list-wrapper">
      <div
        ref={scrollRef}
        className="rank-list"
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <RankListPage />
        <RankListPage />
        <RankListPage />
        <RankListPage />
      </div>
      <div className="rank-list-dots">
        {[...Array(4).keys()].map((_, index) => (
          <div key={index}
            className={`rank-list-dot ${
              index === pageIndex ? "selected" : "unselected"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
