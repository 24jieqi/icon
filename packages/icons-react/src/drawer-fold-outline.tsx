import React from 'react'
const DrawerFoldOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="drawer-fold"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M10 19h12m-12-7h12M10 5h12M7 7l-4.717 4.717a.4.4 0 0 0 0 .566L7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default DrawerFoldOutline
