import React from 'react'
const HomeSwapOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="home-swap"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M3 19.6V7.455a.4.4 0 0 1 .23-.363l8.6-4.013a.4.4 0 0 1 .34 0l8.6 4.013a.4.4 0 0 1 .23.363V19.6a.4.4 0 0 1-.4.4H3.4a.4.4 0 0 1-.4-.4Z"
      />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="m9 9-1 2h8.5M15 17l1-2H7.5"
      />
    </svg>
  )
}
export default HomeSwapOutline
