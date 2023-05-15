import React from 'react'
const YuanWadOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="yuan-wad"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M20 21.6V2.4a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4v19.2c0 .22.18.4.4.4h15.2a.4.4 0 0 0 .4-.4ZM4 19h16M4 16h16M10 4.5l1.5 2m2.5-2-1.5 2M9 7h6m-3 0v6m-3.5-3h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default YuanWadOutline
