import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const SOPOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"
      />
      <Path
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M15 9c0-4-6-4-6 0 0 2 1.54 3 3 3m-3 3c0 4 6 4 6 0 0-2-1.54-3-3-3"
      />
    </Svg>
  )
})
export default SOPOutline
