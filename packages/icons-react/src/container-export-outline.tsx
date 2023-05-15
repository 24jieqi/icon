import React from 'react'
const ContainerExportOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="container-export"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M21.6 4c.22 0 .4.18.4.4v16.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="currentColor"
        d="M5.5 15.5v-6m3.5 6v-6m7.5.5 2 2.5-2 2.5m2-2.5h-6"
      />
    </svg>
  )
}
export default ContainerExportOutline
