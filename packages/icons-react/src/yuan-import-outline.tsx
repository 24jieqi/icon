import React from 'react'
const YuanImportOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="yuan-import"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M22 11V4.4a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4v16.2c0 .22.18.4.4.4H15"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M17.5 19 15 16.5l2.5-2.5m4 5L19 16.5l2.5-2.5m-15-6L9 11l2.5-3M6 14h6m-6-3h6m-3 0v6"
      />
    </svg>
  )
}
export default YuanImportOutline
