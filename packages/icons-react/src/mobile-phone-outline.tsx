import React from 'react'
const MobilePhoneOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="mobile-phone"
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
        d="M10 18h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default MobilePhoneOutline
