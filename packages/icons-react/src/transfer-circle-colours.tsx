import React from 'react'
const TransferCircleColours: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="transfer-circle-colours"
      viewBox="0 0 1024 1024"
      focusable="false"
      width="1em"
      height="1em">
      <path
        fill="#0065FE"
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64Zm268.8 224H243.2c-16.495 0-29.867 13.372-29.867 29.867v388.266c0 16.495 13.372 29.867 29.867 29.867h537.6c16.495 0 29.867-13.372 29.867-29.867V317.867c0-16.495-13.372-29.867-29.867-29.867ZM661.333 543.677v54.303H432.16l17.448 62.382h-54.303l-32.637-116.685h298.666Zm-32.637-181.01 32.637 116.685H362.667V425.05H591.84l-17.448-62.382h54.303Z"
        fillRule="evenodd"
      />
    </svg>
  )
}
export default TransferCircleColours
