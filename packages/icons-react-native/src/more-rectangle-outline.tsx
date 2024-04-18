import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const MoreRectangleOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path d="M11 10h2v4h-2zm-6 0h2v4H5zm12 0h2v4h-2z" fill={color} />
      </Svg>
    )
  },
)
export default MoreRectangleOutline
