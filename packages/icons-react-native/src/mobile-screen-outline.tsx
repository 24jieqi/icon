import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const MobileScreenOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path d="M19 17.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill={color} />
        <Path
          d="M15 8.5V3H2v18h3.5"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 12h13v9H9v-9Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
      </Svg>
    )
  },
)
export default MobileScreenOutline
