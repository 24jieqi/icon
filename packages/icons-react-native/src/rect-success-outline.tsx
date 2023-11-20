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
          height="12"
          rx="1"
          stroke={color}
          strokeWidth={strokeWidth || 1.2}
          width="12"
          x="2"
          y="2"
        />
        <G fill={color}>
          <Rect
            height="1.201"
            rx=".6"
            transform="rotate(-45 6.337 10.068)"
            width="5.752"
            x="6.337"
            y="10.068"
          />
          <Path
            d="m6.272 8.43 1.142 1.143a.6.6 0 1 1-.848.848L5.424 9.278a.6.6 0 0 1 .848-.847"
            fillRule="evenodd"
          />
        </G>
      </Svg>
    )
  },
)
export default RectSuccessOutline
