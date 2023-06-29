import React from 'react'
const DrawerUnfoldOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="drawer-unfold"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M2 19h12M2 12h12M2 5h12m3 2 4.717 4.717a.4.4 0 0 1 0 .566L17 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default DrawerUnfoldOutline
