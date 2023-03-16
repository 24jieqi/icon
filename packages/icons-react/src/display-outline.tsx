import React from 'react'
const DisplayOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="display"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        fill="currentColor"
        d="M678 800.5c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996l-.53.004H346c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l.53-.004h332zm218-666.196c17.673 0 32 14.327 32 32V704c0 17.673-14.327 32-32 32H128c-17.673 0-32-14.327-32-32V166.304c0-17.673 14.327-32 32-32zm-32.001 63.999h-704v473.696h704V198.303z"
      />
    </svg>
  )
}
export default DisplayOutline
