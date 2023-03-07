import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const IdentificationOutline = genOutlineIcon(
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
          d="M3 8V3h5M3 16v5h5M21 8V3h-5m5 13v5h-5"
        />
        <Path
          strokeLinejoin="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12 7c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3Z"
        />
        <Path
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M7 17.5C7 15 9 13 12 13s5 2 5 4.5"
        />
      </Svg>
    )
  },
)
export default IdentificationOutline
