import React from 'react'
const ContainerImportOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="container-import"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M5.5 15.5v-6m3.5 6v-6m5.5.5-2 2.5 2 2.5m-2-2.5h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6 4c.22 0 .4.18.4.4v16.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ContainerImportOutline
