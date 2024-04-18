import React from 'react'
import { Svg, Rect, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const RectSuccessOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 16 16"
        fill="none"
        width={size}
        height={size}>
        <Rect
          y="2"
          x="2"
          width="12"
          strokeWidth={strokeWidth || 1.2}
          stroke={color}
          rx="1"
          height="12"
        />
        <G fill={color}>
          <Rect
            y="10.068"
            x="6.337"
            width="5.752"
            transform="rotate(-45 6.337 10.068)"
            rx=".6"
            height="1.201"
          />
          <Path
            fillRule="evenodd"
            d="m6.272 8.43 1.142 1.143a.6.6 0 1 1-.848.848L5.424 9.278a.6.6 0 0 1 .848-.847"
          />
        </G>
      </Svg>
    )
  },
)
export default RectSuccessOutline
