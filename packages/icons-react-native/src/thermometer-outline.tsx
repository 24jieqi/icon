import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ThermometerOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M6 13V5a3 3 0 1 1 6 0v8a5 5 0 1 1-6 0Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
        <Path
          d="M9 8.5V15"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
        <Path
          d="M15.5 12h4m-4-4h4m-4-4h4"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
        />
      </Svg>
    )
  },
)
export default ThermometerOutline
