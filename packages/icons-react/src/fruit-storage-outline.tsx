import React from 'react'
const FruitStorageOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="fruit-storage"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M2.029 10.085C1.874 9.532 2.364 9 3.028 9h17.944c.665 0 1.154.532 1 1.085l-2.59 9.24c-.111.396-.524.675-1 .675H5.618c-.475 0-.888-.279-.999-.675l-2.59-9.24ZM21 9c0-3.562-2.182-6-5.507-6C12.168 3 10 5.379 10 9m0 0c0-1.781-1.389-3-3.505-3C4.38 6 3 7.19 3 9"
      />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M7 12h10"
      />
    </svg>
  )
}
export default FruitStorageOutline
