import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const FiltrateOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="m3 4 7.2 8.664v6.504L13.8 21v-8.336L21 4H3Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
      </Svg>
    )
  },
)
export default FiltrateOutline
