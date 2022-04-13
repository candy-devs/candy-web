import React, { useState } from "react";
import "./NavigationTab.scss";

export default function NavigationTab({ items, onChange }) {
  const [selected, setSelected] = useState(0);

  const onClick = function (index) {
    setSelected(index);
    onChange(index);
  };

  return (
    <div class="nav-box-tab">
      {items.map((item, i) => (
        <div
          class={`nav-box-tab-item ${
            selected === i ? "nav-box-tab-selected" : "nav-box-tab-unselected"
          }`}
          onClick={() => onClick(i)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
