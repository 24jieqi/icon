import React from 'react'
const FileScreenOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="file-screen"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M607.1 64a32 32 0 0 1 22.689 9.434l.35.358 147.117 152.623a32 32 0 0 1 8.954 21.538l.006.514.984 201.667c.086 17.673-14.171 32.07-31.844 32.156-17.496.085-31.781-13.887-32.149-31.315l-.007-.529-.921-188.846L593.5 128H211.311l2.238 640h92.6c17.497 0 31.714 14.042 31.997 31.47l.004.53c0 17.496-14.042 31.713-31.47 32H181.66c-17.452 0-31.65-13.975-31.993-31.36l-.006-.528-2.461-704c-.061-17.54 13.998-31.824 31.47-32.112H607.1z"
        fill="currentColor"
      />
      <path
        d="M863.39 512h-448c-17.672 0-32 14.327-32 32v384c0 17.673 14.328 32 32 32h448c17.674 0 32-14.327 32-32V544c0-17.673-14.326-32-32-32zm-32 64v320h-384V576h384zM586.803 69.852c17.497 0 31.713 14.041 31.996 31.47l.004.53V241.9h128.268c17.496 0 31.713 14.042 31.996 31.471l.004.53c0 17.496-14.042 31.713-31.471 31.995l-.53.004H586.804c-17.496 0-31.713-14.041-31.995-31.47l-.005-.53V101.852c0-17.674 14.327-32 32-32z"
        fill="currentColor"
      />
    </svg>
  )
}
export default FileScreenOutline
