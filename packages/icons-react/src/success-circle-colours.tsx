import React from 'react'
const SuccessCircleColours: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="success-circle-colours"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <g>
        <circle fill="#34B545" cy="12" cx="12" r="10" />
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M8 6h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"
        />
        <path
          fill="#34B545"
          fillRule="evenodd"
          d="m11.015 14.73-1.726-1.39a.4.4 0 0 1-.078-.538l.208-.303a.4.4 0 0 1 .58-.085l.949.763a.2.2 0 0 0 .29-.042l2.61-3.79a.4.4 0 0 1 .573-.09l.277.213a.4.4 0 0 1 .086.544l-2.77 4.023-.419.609a.4.4 0 0 1-.58.085"
        />
      </g>
    </svg>
  )
}
export default SuccessCircleColours
