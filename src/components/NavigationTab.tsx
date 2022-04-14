import React, { useState } from "react";
import "./NavigationTab.scss";

type NavigationTabProps = {
  items: string[],
  onChange: (index: number) => void,
  initialPage?: number,
};

export default function NavigationTab({ items, initialPage, onChange }: NavigationTabProps) {
  const [selected, setSelected] = useState(initialPage ?? 0);

  const onClick = function (index : number) {
    setSelected(index);
    onChange(index);
  };

  return (
    <div className="nav-box-tab">
      {items.map((item, i) => (
        <div
        className={`nav-box-tab-item ${
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
