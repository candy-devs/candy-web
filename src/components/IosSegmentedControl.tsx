// import "./IosSegmentedControl.scss";

// import React, { Component } from "react";

// // https://www.cssscript.com/ios-segmented-controls/
// export default class IosSegmentedControl extends Component {
//   constructor(props) {
//     super(props);

//     this.updatePillPosition = this.updatePillPosition.bind(this);
//   }

//   updatePillPosition() {}

//   render() {
//     return (
//       <div class="ios-segmented-control" update={this.updatePillPosition}>
//         <span class="selection"></span>
//         <div class="option">
//           <input type="radio" id="metro" name="sample" value="metro" checked />
//           <label for="metro">
//             <span>Metro</span>
//           </label>
//         </div>
//         <div class="option">
//           <input type="radio" id="bus" name="sample" value="bus" />
//           <label for="bus">
//             <span>Bus</span>
//           </label>
//         </div>
//         <div class="option">
//           <input type="radio" id="train" name="sample" value="train" />
//           <label for="train">
//             <span>Train</span>
//           </label>
//         </div>
//       </div>
//     );
//   }
// }

import { useRef, useState, useEffect } from "react";
import "./IosSegmentedControl.scss";


// https://letsbuildui.dev/articles/building-a-segmented-control-component
// https://codesandbox.io/s/react-segmented-control-krgq5?file=/src/App.js:0-41
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-segmented-control-component
 */

type IosSegmentedControl = {
  name: string,
  callback: (val: number, index: number) => void,
  segments: {label: string, value: number, ref: any}[],
  defaultIndex: number,
  controlRef: any,
};

const IosSegmentedControl = ({
  name,
  segments,
  callback,
  defaultIndex = 0,
  controlRef
}: IosSegmentedControl) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef<boolean>();

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty("--highlight-width", `${offsetWidth}px`);
    style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
  }, [activeIndex, callback, controlRef, segments]);

  const onInputChange = (value: number, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  return (
    <div className="controls-container" ref={controlRef}>
      <div className={`controls ${componentReady.current ? "ready" : "idle"}`}>
        {segments?.map((item, i) => (
          <div
            key={item.value}
            className={`segment ${i === activeIndex ? "active" : "inactive"}`}
            ref={item.ref}
          >
            <input
              type="radio"
              value={item.value}
              id={item.label}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IosSegmentedControl;
