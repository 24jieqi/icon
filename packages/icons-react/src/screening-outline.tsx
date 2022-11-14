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
      <g fill="#595959">
        <rect x="6" y="6" width="1" height="8" rx="0" fill="currentColor" />
        <rect x="9" y="10" width="4" height="1" rx="0" fill="currentColor" />
        <rect x="9" y="13" width="4" height="1" rx="0" fill="currentColor" />
        <path d="m2 3 4.5 6L11 3H2Z" fill="currentColor" />
      </g>
    </svg>
  )
}
export default ScreeningOutline
