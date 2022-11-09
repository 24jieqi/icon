import React from 'react'
const ImageStowOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="image-stow"
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <g fill="#595959">
        <path
          d="M12.462 5.667V2H13v.538H3V2h.538v11H3v-.537h6.818v1.075H2.462V1.461h11.075v4.205h-1.075Z"
          fill="currentColor"
        />
        <path
          d="M11.5 14V7h1v7h-1Zm3.146-3.646-3-3L12 7l.354.354-3 3-.708-.708L12 6.293l3.354 3.353-.708.708Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
export default ImageStowOutline
