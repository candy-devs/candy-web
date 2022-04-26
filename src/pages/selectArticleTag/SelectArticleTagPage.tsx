import styles from "./SelectArticleTagPage.module.scss";

import React, { useRef, useState } from "react";
import { CloseIcon, SearchIcon } from "../../assets/Icons";
import IosSegmentedControl from "../../components/IosSegmentedControl";

export default function SelectArticleTagPage() {
  const [searchType, setSearchType] = useState(0);

  return (
    <div className={styles.SelectArticleTag} style={{ zIndex: 30 }}>
      <div className={styles.Body}>
        <div className={styles.TitleBar}>
          <span>게시판 · 태그 선택</span>
          <CloseIcon />
        </div>
        <div className={styles.SearchArea}>
          <IosSegmentedControl
            name="selectArticleTag"
            callback={(val: number, index: number) => setSearchType(val)}
            controlRef={useRef()}
            defaultIndex={0}
            minWitdh={50}
            segments={[
              {
                label: "게시판",
                value: 0,
                ref: useRef(),
              },
              {
                label: "태그",
                value: 1,
                ref: useRef(),
              },
            ]}
          />
          <div className={styles.SearchBar}>
            <SearchIcon />
            <input />
          </div>
        </div>
      </div>
    </div>
  );
}
