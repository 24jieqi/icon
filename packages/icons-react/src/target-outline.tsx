import React from 'react'
const TargetOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="target"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M14 2.205a9.95 9.95 0 0 0-1.957-.193c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-.689-.07-1.362-.205-2.012"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.174 6.116A5.97 5.97 0 0 0 12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6c0-.413-.042-.817-.123-1.207"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 7.5 22 7l-5-5-.5 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 7.5 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default TargetOutline
