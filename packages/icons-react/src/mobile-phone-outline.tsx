import React from 'react'
const MobilePhoneOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="mobile-phone"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        fill="currentColor"
        d="M832 96c17.673 0 32 14.327 32 32v768c0 17.673-14.327 32-32 32H192c-17.673 0-32-14.327-32-32V128c0-17.673 14.327-32 32-32zm-32 633.718H224V864h576V729.718zm-287.992 25.927c24.742 0 44.8 20.057 44.8 44.8 0 24.742-20.058 44.8-44.8 44.8-24.742 0-44.8-20.058-44.8-44.8 0-24.743 20.058-44.8 44.8-44.8zM800 160H224v505.718h576V160z"
      />
    </svg>
  )
}
export default MobilePhoneOutline
