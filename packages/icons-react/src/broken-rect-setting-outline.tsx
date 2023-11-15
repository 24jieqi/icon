import React from 'react'
const BrokenRectSettingOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="broken-rect-setting"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="m15.201 15.885 3.1-1.772a.4.4 0 0 1 .398 0l3.1 1.772a.4.4 0 0 1 .201.347v3.536a.4.4 0 0 1-.201.347l-3.1 1.772a.4.4 0 0 1-.398 0l-3.1-1.772a.4.4 0 0 1-.201-.347v-3.536a.4.4 0 0 1 .201-.347Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
      <path
        d="M12 19H2.4a.4.4 0 0 1-.4-.4V5.4c0-.22.18-.4.4-.4h6.894a.4.4 0 0 1 .343.606L7.04 9.933a.4.4 0 0 0-.052.145l-.737 4.793c-.064.414.472.635.718.296l2.98-4.098a.401.401 0 0 1 .126-.112l3.338-1.907a.4.4 0 0 0 .14-.135l2.33-3.727A.4.4 0 0 1 16.221 5H21.6c.22 0 .4.18.4.4V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default BrokenRectSettingOutline
