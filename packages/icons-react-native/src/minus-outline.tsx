import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const MinusOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M3 12h18"
      />
    </Svg>
  )
})
export default MinusOutline
