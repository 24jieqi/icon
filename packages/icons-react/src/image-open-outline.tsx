import React from 'react'
const ImageOpenOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="image-open"
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
        d="M20 10V2.4a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4v19.2c0 .22.18.4.4.4H13m5-9v9"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="m14 18 3.717 3.717a.4.4 0 0 0 .566 0L22 18"
      />
    </svg>
  )
}
export default ImageOpenOutline
