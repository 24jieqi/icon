import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ArrowsShrinkOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M3 10h7V3m11 11h-7v7"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 10 3.5 3.5m11 11L21 21"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
        />
      </Svg>
    )
  },
)
export default ArrowsShrinkOutline
