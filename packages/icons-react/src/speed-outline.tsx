import React from 'react'
const SpeedOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="speed"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M4.929 19A9.906 9.906 0 0 1 2 11.958C2 6.458 6.477 2 12 2s10 4.458 10 9.958A9.91 9.91 0 0 1 19.071 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12.04c0 3-2.5 5.96-6 5.96s-6-3-6-5.96C6 9.082 8.5 6 12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m13 11 3-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default SpeedOutline
