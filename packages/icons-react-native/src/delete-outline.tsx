import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const DeleteOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M5 10v12h14V10m-4.5 0v7m-5-7v7M3 6h18"
      />
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M8 6V2h8v4"
      />
    </Svg>
  )
})
export default DeleteOutline
