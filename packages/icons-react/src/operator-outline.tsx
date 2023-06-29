import React from 'react'
const OperatorOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="operator"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M18 8h2.6c.22 0 .4.18.4.4v7.2a.4.4 0 0 1-.4.4H18M6 8H3.4a.4.4 0 0 0-.4.4v7.2c0 .22.18.4.4.4H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 2a6 6 0 0 1 6 6v8c0 3.314-6 6-6 6m0-20a6 6 0 0 0-6 6v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default OperatorOutline
