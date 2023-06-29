import React from 'react'
const BookOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="book"
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <clipPath id="d902b__a">
        <path d="M0 0h16v16H0z" />
      </clipPath>
      <g clipPath="url(#d902b__a)">
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M7.333 2.667h-4q-.276 0-.471.195-.195.195-.195.471v9.334q0 .276.195.471.195.195.471.195h4zm.667 12H3.333q-.828 0-1.414-.586t-.586-1.414V3.333q0-.828.586-1.414t1.414-.586h9.334q.828 0 1.414.586t.586 1.414v9.334q0 .828-.586 1.414t-1.414.586zm.667-12v10.666h4q.276 0 .471-.195.195-.195.195-.471V3.333q0-.276-.195-.471-.195-.195-.471-.195z"
        />
      </g>
    </svg>
  )
}
export default BookOutline
