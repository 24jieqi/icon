import React from 'react'
const MoreCircleOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="more-circle"
      viewBox="0 0 1024 1024"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M64 512C64 264.6 264.6 64 512 64s448 200.6 448 448-200.6 448-448 448S64 759.4 64 512Zm76 0c0 205.4 166.6 372 372 372s372-166.6 372-372-166.6-372-372-372-372 166.6-372 372Zm180 64c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64Zm128-64c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64Zm256 64c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64Z"
        fillRule="evenodd"
        fill="currentColor"
      />
    </svg>
  )
}
export default MoreCircleOutline
