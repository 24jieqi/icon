import React from 'react'
const DisplayOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="display"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M21.6 4c.22 0 .4.18.4.4v13.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 21h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
export default DisplayOutline
