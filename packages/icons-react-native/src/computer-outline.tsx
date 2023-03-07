import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ComputerOutline = genOutlineIcon(
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
          d="M20.6 2c.22 0 .4.18.4.4v14.2a.4.4 0 0 1-.4.4H3.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h17.2ZM12 16v5"
        />
        <Path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M6 22h12M7 7h8.5M7 11h4"
        />
      </Svg>
    )
  },
)
export default ComputerOutline
