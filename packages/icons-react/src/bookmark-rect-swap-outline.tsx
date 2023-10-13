import React from 'react'
const BookmarkRectSwapOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="bookmark-rect-swap"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M12 19H2.4a.4.4 0 0 1-.4-.4V5.4c0-.22.18-.4.4-.4h19.2c.22 0 .4.18.4.4V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m17 14-1 2h6.5m-2 5 1-2H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 16H6.4a.4.4 0 0 1-.4-.4V8.4c0-.22.18-.4.4-.4H15m3 3.5V8.4a.4.4 0 0 0-.4-.4H15m0 0v3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
export default BookmarkRectSwapOutline
