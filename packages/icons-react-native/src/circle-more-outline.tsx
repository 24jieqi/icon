import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CircleMoreOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
        <Path
          d="M12 13.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.25 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
          fill={color}
        />
      </Svg>
    )
  },
)
export default CircleMoreOutline
