import React from 'react'
const DashboardOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="dashboard"
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
        d="M4 21h16m-8.027-6C9.973 15 8 13.333 8 11s2-4 3.973-4C13.946 7 16 8.667 16 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m13 12 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default DashboardOutline
