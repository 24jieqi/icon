import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CirclePlusOutline = genOutlineIcon(
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
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"
        />
        <Path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M7.791 11.918h8.25m-4.125 4.125v-8.25"
        />
      </Svg>
    )
  },
)
export default CirclePlusOutline
