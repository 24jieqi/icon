import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ArrowsExpandOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M11 4H4v7m9 9h7v-7"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="m4 4 6.5 6.5M20 20l-6.5-6.5"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
        />
      </Svg>
    )
  },
)
export default ArrowsExpandOutline
