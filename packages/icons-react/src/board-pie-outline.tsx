import React from 'react'
const BoardPieOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="board-pie"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M20 12.5V3.4a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4v18.2c0 .22.18.4.4.4H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2v2m8-2v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m13.201 15.885 3.1-1.772a.4.4 0 0 1 .398 0l3.1 1.772a.4.4 0 0 1 .201.347v3.536a.4.4 0 0 1-.201.347l-3.1 1.772a.4.4 0 0 1-.398 0l-3.1-1.772a.4.4 0 0 1-.201-.347v-3.536a.4.4 0 0 1 .201-.347Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
      <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="12.5" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" />
      <rect x="11" y="6" width="3" height="3" rx="1.5" fill="currentColor" />
    </svg>
  )
}
export default BoardPieOutline
