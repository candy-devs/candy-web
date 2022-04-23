import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartBreakIcon,
  HomeIcon,
  PencilIcon,
  SearchIcon,
} from "../../assets/Icons";
import styles from "./BottomNavigation.module.scss";

type BottomNavigationProps = {
  onChange?: (index: number) => void;
};

export default function BottomNavigation({ onChange }: BottomNavigationProps) {
  const [selected, setSelected] = useState(0);

  const onClick = function (index: number) {
    setSelected(index);
    onChange!(index);
  };

  const icons = [
    <HomeIcon />,
    <SearchIcon />,
    <PencilIcon />,
    <HeartBreakIcon />,
    <HomeIcon />,
  ];
  const route = ["/home", "/search", "/write", "/bookmark", "/profile"];

  return (
    <nav className={styles.BottomNavBox}>
      {/* <div className="bottom-nav-box-divider" /> */}
      <div className={styles.BottomNavBoxDivider} />
      <div className={styles.BottomNavBoxIcons}>
        {icons.map((icon, index) => (
          <Link key={index}
            to={route[index]}
            className={`${styles.BottomNavBoxIcon} ${
              index === selected ? styles.Selected : ""
            }`}
            onClick={() => onClick(index)}
          >
            {icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
