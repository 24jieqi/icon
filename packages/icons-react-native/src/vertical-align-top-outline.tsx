import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const VerticalAlignTopOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="m4 13 8-7 8 7"
        />
        <Path
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12 7v15m8-19H4"
        />
      </Svg>
    )
  },
)
export default VerticalAlignTopOutline
