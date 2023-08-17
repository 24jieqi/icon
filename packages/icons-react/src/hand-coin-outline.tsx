import React from 'react'
const HandCoinOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="hand-coin"
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
        d="M2 14.5c1.5-1 3-2.5 5-2.5s6.75 2 7.5 3-1.5 2.5-1.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 2c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m15.562 6.897 1.266-2.111a.2.2 0 0 1 .344 0l1.266 2.111a.2.2 0 0 1 0 .206l-1.266 2.111a.2.2 0 0 1-.344 0l-1.266-2.111a.2.2 0 0 1 0-.206Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
export default HandCoinOutline
