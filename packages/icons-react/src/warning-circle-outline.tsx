import React from 'react'
const WarningCircleOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em"
      fill="currentColor">
      <path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zM512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 542.933333a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m34.944-402.218666c5.76 0 10.368 4.48 10.24 10.666666l-6.613333 320.938667a10.965333 10.965333 0 0 1-10.538667 10.666667h-54.528a10.581333 10.581333 0 0 1-10.538667-10.666667l-10.24-320.938667a10.069333 10.069333 0 0 1 10.24-10.666666h71.978667z" />
    </svg>
  )
}
export default WarningCircleOutline
