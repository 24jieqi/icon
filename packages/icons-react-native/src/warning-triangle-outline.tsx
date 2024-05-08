import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const WarningTriangleOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G fill={color} fillRule="evenodd">
          <Path d="M22.854 21.502q.292-.498.012-1.002L12.883 2.53q-.289-.52-.883-.52-.594 0-.883.52L1.134 20.5q-.28.504.013 1.002.292.498.87.498h19.966q.578 0 .87-.498zM20.3 20 12 5.06 3.7 20z" />
          <Path d="M11 15v-5h2v5zm0 3v-2h2v2z" />
        </G>
      </Svg>
    )
  },
)
export default WarningTriangleOutline
