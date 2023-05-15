import React from 'react'
const ComputerOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="computer"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M21.6 4c.22 0 .4.18.4.4v13.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
      />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M17 8v6m-5-5v5m-5-4v4m-3 7h16"
      />
    </svg>
  )
}
export default ComputerOutline
