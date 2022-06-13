import React from 'react'
const OperatorOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="operator"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      focusable="false"
      width="1em"
      height="1em">
      <path d="M384 896a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" />
      <path d="M576 96c122.475 0 221.992 98.293 223.97 220.296L800 320v384c0 122.475-98.293 221.992-220.296 223.97L576 928H448v-64h128c87.482 0 158.566-70.209 159.979-157.354L736 704V320c0-87.482-70.209-158.566-157.354-159.979L576 160H448c-87.482 0-158.566 70.209-159.979 157.354L288 320v384h-64V320c0-122.475 98.293-221.992 220.296-223.97L448 96h128z" />
      <path d="M288 736V352h-32c-88.366 0-160 71.634-160 160v64c0 88.366 71.634 160 160 160h32zm-64-314.536v245.071l-1.185-.425C186.149 652.603 160 617.356 160 576v-64c0-41.356 26.15-76.603 62.815-90.11l1.185-.426zM768 352h-31.999L736 736.26l34.637-.282C857.896 734.564 928 663.381 928 576.001v-64.002C928 423.634 856.366 352 768 352zm32 69.464 1.185.426C837.851 435.397 864 470.644 864 512v64l-.012 1.57c-.654 40.739-26.707 75.371-63.07 88.642l-.919.326.001-245.074z" />
    </svg>
  )
}
export default OperatorOutline
