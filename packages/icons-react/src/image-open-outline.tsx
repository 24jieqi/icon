import React from 'react'
const ImageOpenOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="image-open"
      viewBox="0 0 16 16"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <g fill="currentColor">
        <path d="M12.462 6V2H13v.538H3V2h.538v11H3v-.537h5.5v1.075H2.462V1.461h11.075V6h-1.075Z" />
        <path
          transform="matrix(1 0 0 -1 0 28)"
          d="M11.5 21v-7h1v7h-1Zm3.146-3.646-3-3L12 14l.354.354-3 3-.708-.708L12 13.293l3.354 3.353-.708.708Z"
        />
      </g>
    </svg>
  )
}
export default ImageOpenOutline
