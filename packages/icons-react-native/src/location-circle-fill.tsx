import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const LocationCircleFill = genFillIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Circle r="10" cx="12" cy="12" fill={color} />
        <Path
          d="m12 17-.53.848a1 1 0 0 0 1.06 0L12 17Zm0 0 .53.848h.001l.002-.002.004-.002.013-.008a4.086 4.086 0 0 0 .187-.125 13.202 13.202 0 0 0 1.984-1.683C15.778 14.93 17 13.234 17 11.182h-2c0 1.266-.778 2.48-1.72 3.46a11.21 11.21 0 0 1-1.807 1.508l-.004.003s.001-.001.531.847Zm5-5.818C17 8.52 14.682 6.5 12 6.5v2c1.737 0 3 1.277 3 2.682h2ZM12 6.5c-2.682 0-5 2.02-5 4.682h2C9 9.777 10.263 8.5 12 8.5v-2Zm-5 4.682c0 2.052 1.222 3.747 2.28 4.846a13.202 13.202 0 0 0 2.129 1.78l.041.028.013.008.004.002.002.001s.001.001.531-.847l.53-.848h.001l-.004-.002a3.472 3.472 0 0 1-.134-.09 11.21 11.21 0 0 1-1.672-1.419C9.778 13.662 9 12.449 9 11.182H7Zm5 2.318a2 2 0 0 0 2-2h-2v2Zm2-2a2 2 0 0 0-2-2v2h2Zm-2-2a2 2 0 0 0-2 2h2v-2Zm-2 2a2 2 0 0 0 2 2v-2h-2Z"
          fill="#FFF"
        />
      </Svg>
    )
  },
)
export default LocationCircleFill
