

import React, { useState } from 'react'
import { HeartBreakIcon,  HomeIcon, PencilIcon, SearchIcon } from '../../assets/Icons'
import './BottomNavigation.scss'

type BottomNavigationProps = {
  onChange?: (index: number) => void,
}

export default function BottomNavigation({ onChange }: BottomNavigationProps) {
  const [selected, setSelected] = useState(0);

  const onClick = function (index : number) {
    setSelected(index);
    onChange!(index);
  };

  const icons = [<HomeIcon />, <SearchIcon />, <PencilIcon />, <HeartBreakIcon />, <HomeIcon />];

  return (
    <div className='bottom-nav-box'>
      <div className="bottom-nav-box-divider" />
      <div className='bottom-nav-box-icons'>
        {icons.map((icon, index) =>
          <div className={`bottom-nav-box-icon ${index === selected ? 'selected' : ''}`} onClick={() => onClick(index)}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
