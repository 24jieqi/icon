import React from 'react'
const TeamOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="team"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M9.5 3c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M16 4c1.65 0 3 1.35 3 3s-1.35 3-3 3m-.4 11H3.4a.4.4 0 0 1-.4-.4V18a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2.6a.4.4 0 0 1-.4.4Zm1.9-8v0a3.5 3.5 0 0 1 3.5 3.5v4.1a.4.4 0 0 1-.4.4H19"
      />
    </svg>
  )
}
export default TeamOutline
