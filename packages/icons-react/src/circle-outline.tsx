import React from 'react'
const CircleOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em"
      fill="currentColor">
      <path d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 42.666667a384 384 0 1 0 0 768 384 384 0 0 0 0-768z" />
    </svg>
  )
}
export default CircleOutline
