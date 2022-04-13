import React, { useRef, useState } from "react";
import IosSegmentedControl from "../../components/IosSegmentedControl";
import RankList from "../../components/RankList";
import "./Rank.scss";

export default function Rank() {
  const [type, setType] = useState(0);

  return (
    <div className="hot-page-rank">
      <IosSegmentedControl
        name="hotPageRank"
        callback={(val: number, index: number) => setType(val)}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "이슈 태그",
            value: 0,
            ref: useRef(),
          },
          {
            label: "인기 게시판",
            value: 1,
            ref: useRef(),
          },
        ]}
      />
      <div style={{padding: "6px 16px 0 16px"}}>
      <RankList/>
      </div>
    </div>
  );
}
