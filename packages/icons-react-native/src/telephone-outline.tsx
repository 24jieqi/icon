import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const TelephoneOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M8.624 3c.378 0 .726.217.91.567l1.271 2.425c.167.318.174.702.021 1.027L9.601 9.614s.355 1.933 1.84 3.506c1.487 1.574 3.306 1.943 3.306 1.943l2.45-1.297a.989.989 0 0 1 .97.023l2.298 1.352c.33.194.535.563.535.962v2.793c0 1.423-1.248 2.45-2.52 1.995-2.614-.934-6.672-2.712-9.244-5.435-2.572-2.723-4.251-7.02-5.133-9.787C3.673 4.32 4.643 3 5.987 3h2.637Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
      </Svg>
    )
  },
)
export default TelephoneOutline
