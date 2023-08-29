import React from 'react'
const HandArrowUpOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="hand-arrow-up"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="m10 16.5 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4-6.5-1.5-8.5-1.5H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14.5c1.5-1 3-2.5 5-2.5s6.75 2 7.5 3-1.5 2.5-1.5 2.5M13 7l3-3m0 0 3 3m-3-3v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default HandArrowUpOutline
