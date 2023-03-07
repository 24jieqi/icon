import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const HomeOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12.063 14.813v4.03"
      />
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 2 3 8v14h18V8l-9-6Z"
      />
    </Svg>
  )
})
export default HomeOutline
