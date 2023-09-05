import React from 'react'
const DoubleUpRectSettingOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="double-up-rect-setting"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M12 4H2.4a.4.4 0 0 0-.4.4v15.2c0 .22.18.4.4.4h19.2a.4.4 0 0 0 .4-.4V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m6 11 2.717-2.717a.4.4 0 0 1 .566 0L12 11m-6 5 2.717-2.717a.4.4 0 0 1 .566 0L12 16m3.201-11.115 3.1-1.772a.4.4 0 0 1 .398 0l3.1 1.772a.4.4 0 0 1 .201.347v3.536a.4.4 0 0 1-.201.347l-3.1 1.772a.4.4 0 0 1-.398 0l-3.1-1.772A.4.4 0 0 1 15 8.768V5.232a.4.4 0 0 1 .201-.347Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default DoubleUpRectSettingOutline
