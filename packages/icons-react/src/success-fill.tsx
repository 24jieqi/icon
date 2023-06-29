import React from 'react'
const SuccessFill: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="success-fill"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <defs>
        <clipPath id="6d1f7__a">
          <rect rx="0" height="24" width="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#6d1f7__a)">
        <circle fill="currentColor" cy="12" cx="12" r="10" />
        <path
          fill="#FFF"
          d="M19.415 11a1 1 0 0 0-2 0h2Zm-1 7.729h-1a1 1 0 0 0 1 1v-1Zm5 1a1 1 0 0 0 0-2v2Zm-6-8.729v7.729h2V11h-2Zm1 8.729h5v-2h-5v2Z"
          transform="scale(-1 1) rotate(-45 0 52.043)"
        />
      </g>
    </svg>
  )
}
export default SuccessFill
