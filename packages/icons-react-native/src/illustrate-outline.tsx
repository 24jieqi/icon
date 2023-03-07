import React from 'react'
import { Svg, Rect, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const IllustrateOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 25"
        fill="none"
        width={size}
        height={size}>
        <Rect
          x="3.991"
          y="2.941"
          width="16"
          height="20"
          rx=".4"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
        <Path
          d="M7.991 16.941h6m-6-4h4m-4-4h8"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
        />
      </Svg>
    )
  },
)
export default IllustrateOutline
