import React from 'react'
const GoldBrickSettingOutline: React.FC<
  React.SVGProps<SVGSVGElement>
> = props => {
  return (
    <svg
      {...props}
      id="gold-brick-setting"
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      width="1em"
      height="1em">
      <path
        d="M12 19H2.674a.4.4 0 0 1-.351-.591l2.563-4.7a.4.4 0 0 1 .351-.209h7.097a.4.4 0 0 1 .283.117L13 14M6.323 9.908l2.563-4.7A.4.4 0 0 1 9.237 5h6.525a.4.4 0 0 1 .352.208l2.563 4.7a.4.4 0 0 1-.35.592H6.673a.4.4 0 0 1-.351-.592Zm8.878 5.977 3.1-1.772a.4.4 0 0 1 .398 0l3.1 1.772a.4.4 0 0 1 .201.347v3.536a.4.4 0 0 1-.201.347l-3.1 1.772a.4.4 0 0 1-.398 0l-3.1-1.772a.4.4 0 0 1-.201-.347v-3.536a.4.4 0 0 1 .201-.347Z"
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
export default GoldBrickSettingOutline
