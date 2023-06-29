import React from 'react'
const ScreeningOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="screening"
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <g fill="currentColor">
        <rect rx="0" height="8" width="1" y="6" x="6" />
        <rect rx="0" height="1" width="4" y="10" x="9" />
        <rect rx="0" height="1" width="4" y="13" x="9" />
        <path d="m2 3 4.5 6L11 3H2Z" />
      </g>
    </svg>
  )
}
export default ScreeningOutline
