import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const LocationOutline = genOutlineIcon(
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
          strokeWidth={strokeWidth || 2.354}
          stroke={color}
          d="M12 22s8.5-5.481 8.5-11.818C20.5 5.663 16.694 2 12 2s-8.5 3.663-8.5 8.182C3.5 16.519 12 22 12 22Z"
        />
        <Path
          strokeLinejoin="round"
          strokeWidth={strokeWidth || 2}
          stroke={color}
          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </Svg>
    )
  },
)
export default LocationOutline
