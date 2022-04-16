import React, { useRef, useState } from 'react'
import ArticleHeaderItem from '../../components/ArticleHeaderItem'
import HorizontalScroll from '../../components/HorizontalScroll';
import IosSegmentedControl from '../../components/IosSegmentedControl'
import SelectButton from '../../components/SelectButton'

export default function MyPage() {
  const [type, setType] = useState(0);

  return (
    <div>
      <div className='my-setting-panel' style={{ padding: "16px" }}>
        <IosSegmentedControl
          name="hotPageRank"
          callback={(val: number, index: number) => setType(val)}
          controlRef={useRef()}
          defaultIndex={0}
          segments={[
            {
              label: "구독 글쓴이",
              value: 0,
              ref: useRef(),
            },
            {
              label: "즐찾 게시판",
              value: 1,
              ref: useRef(),
            },
          ]}
        />
      </div>
        <div style={{ height: "40px" }}>
          <HorizontalScroll>
            {[...Array(8).keys()].map((_, index) =>
              <div style={{ minWidth: "140px" }}>
                <SelectButton content={index.toString()} />
              </div>
            )}
          </HorizontalScroll>
        </div>
      <div style={{ padding: "16px" }}>
        <ArticleHeaderItem />
        <ArticleHeaderItem />
        <ArticleHeaderItem />
      </div>
    </div>
  )
}
