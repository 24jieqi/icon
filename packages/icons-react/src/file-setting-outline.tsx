import React from 'react'
const FileSettingOutline: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      {...props}
      id="file-setting"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M13 2H4.4a.4.4 0 0 0-.4.4v19.2c0 .22.18.4.4.4H11m2-20 7 7m-7-7v6.6c0 .22.18.4.4.4H20m0 3.5V9m-6.799 6.885 3.1-1.772a.4.4 0 0 1 .398 0l3.1 1.772a.4.4 0 0 1 .201.347v3.536a.4.4 0 0 1-.201.347l-3.1 1.772a.4.4 0 0 1-.398 0l-3.1-1.772a.4.4 0 0 1-.201-.347v-3.536a.4.4 0 0 1 .201-.347Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default FileSettingOutline
