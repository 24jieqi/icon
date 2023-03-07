import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const InfoCircleOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        />
        <Path
          fill={color}
          d="M12 5.5A1.25 1.25 0 1 1 12 8a1.25 1.25 0 0 1 0-2.5Zm.25 11.5v-7h-1"
        />
        <Path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12.25 17v-7h-1"
        />
      </Svg>
    )
  },
)
export default InfoCircleOutline
