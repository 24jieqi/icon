import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ScanCodeOutline = genOutlineIcon(
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
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M5 12h14"
        />
      </Svg>
    )
  },
)
export default ScanCodeOutline
