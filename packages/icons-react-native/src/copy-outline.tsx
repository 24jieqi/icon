import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CopyOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M8 2h12v16"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6h12v16H4V6Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
    </Svg>
  )
})
export default CopyOutline
