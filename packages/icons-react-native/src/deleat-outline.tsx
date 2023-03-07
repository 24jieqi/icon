import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const DeleatOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M5 10v12h14V10m-4.5 0v7m-5-7v7M3 6h18"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V2h8v4"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
    </Svg>
  )
})
export default DeleatOutline
