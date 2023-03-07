import React from 'react'
import { Svg, Defs, Mask, Rect, G, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleDisabledColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Defs>
          <Mask id="bc2f6__a">
            <Rect width="24" height="24" rx="0" fill="#FFF" />
          </Mask>
        </Defs>
        <G mask="url(#bc2f6__a)">
          <Path
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
            fill="#E3E5E8"
          />
          <Path
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
            fillRule="evenodd"
            fill="#B9BEC5"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleDisabledColours
