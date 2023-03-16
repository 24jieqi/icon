import React from 'react'
const ArrearsCircleColours: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="arrears-circle-colours"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <g>
        <circle fill="#FE6F2D" cy="12" cx="12" r="11" />
        <path
          fill="#FFF"
          d="M10.31 10.089q-.598 1.162-1.36 2.151l-1.26-.901q.67-.798 1.214-1.807.547-1.012.866-2.031l1.491.25q-.11.378-.342.96h5.28v1.378l-1.25 2.122-1.289-.57.97-1.552h-4.32Zm2.35 1.422q.219 1.218 1.163 2.165.947.944 2.676 1.663l-.909 1.452q-1.149-.55-2.086-1.344-.934-.798-1.524-1.768-1.031 1.81-3.671 3.122l-.85-1.302q1.95-.889 2.826-1.953.875-1.065.885-2.526l.02-.73h1.53q0 .371-.03.84 0 .059-.006.156-.004.095-.023.225Z"
        />
      </g>
    </svg>
  )
}
export default ArrearsCircleColours
