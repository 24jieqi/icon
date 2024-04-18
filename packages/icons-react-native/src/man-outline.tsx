import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ManOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle
        r="5.5"
        cx="10.5"
        cy="13.5"
        stroke={color}
        strokeWidth={strokeWidth || 2}
      />
      <Path
        d="M18 7.414V10h2V4h-6v2h2.586l-3.293 3.293 1.414 1.414z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
})
export default ManOutline
