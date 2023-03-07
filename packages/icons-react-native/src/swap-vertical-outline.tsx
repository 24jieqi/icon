import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const SwapVerticalOutline = genOutlineIcon(
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
          d="M8.5 3v18L4 18m11.5 3V3L20 6"
        />
      </Svg>
    )
  },
)
export default SwapVerticalOutline
