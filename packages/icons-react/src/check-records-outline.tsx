import React from 'react'
const CheckRecordsOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="check-records"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M20 21.6a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h15.2c.22 0 .4.18.4.4v19.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 14h8m-8 4h8M9 8l2 2 4-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default CheckRecordsOutline
