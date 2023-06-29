import React from 'react'
const ApartmentOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="apartment"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M704 160H320c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h384c17.673 0 32-14.327 32-32V192c0-17.673-14.327-32-32-32zm-32 64v192H351.999V223.999H672zM448 608H128c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h320c17.673 0 32-14.327 32-32V640c0-17.673-14.327-32-32-32zm-32 64v192H159.999V671.999H416zm480-64H576c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h320c17.673 0 32-14.327 32-32V640c0-17.673-14.327-32-32-32zm-32 64v192H607.999V671.999H864z"
        fill="currentColor"
      />
      <path
        d="M320 640h-64v-64c0-35.346 28.654-64 64-64h160v-64h64v64h160c34.993 0 63.426 28.084 63.991 62.942L768 576v64h-64v-64H320v64z"
        fill="currentColor"
      />
    </svg>
  )
}
export default ApartmentOutline
