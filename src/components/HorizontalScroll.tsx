import React from 'react'
import './HorizontalScroll.scss'

type HorizontalScrollProps = {
  children: any,
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  return (
    <div className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll">
        {children}
      </div>
    </div>
  )
}
