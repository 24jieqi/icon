import React from 'react'
const BankCardCircleColours: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="bank-card-circle-colours"
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em">
      <path
        fillRule="evenodd"
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64Zm298.667 392H213.333v250.133c0 16.495 13.372 29.867 29.867 29.867h537.6c16.495 0 29.867-13.372 29.867-29.867V456ZM752.92 624.65 736 680h-74.667l16.92-55.35h74.667Zm-112 0L624 680h-54.667l16.92-55.35h54.667Zm-93.293 0L530.707 680H476.04l16.92-55.35h54.667ZM780.8 288H243.2c-16.495 0-29.867 13.372-29.867 29.867V400h597.334v-82.133c0-16.495-13.372-29.867-29.867-29.867Z"
        fill="#1BA2FC"
      />
    </svg>
  )
}
export default BankCardCircleColours
