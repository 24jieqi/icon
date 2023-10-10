import React from 'react'
const SealRectSettingOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="seal-rect-setting"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M12 20H2.9a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h18.2c.22 0 .4.18.4.4V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m5 15 .001-2.053c0-.143.112-.258.25-.259h2.5c.231 0 .23-.21.23-.713 0-.502-1.225-.925-1.225-2.69C6.756 7.519 8.025 7 9.08 7s2.204.52 2.204 2.285c0 1.765-1.219 2.046-1.219 2.69 0 .645 0 .713.195.713h2.49c.138 0 .25.116.25.258V15H5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
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
    </svg>
  )
}
export default SealRectSettingOutline
