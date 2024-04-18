import React from 'react'
import { Svg, Circle, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const WomanOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle
        r="5.5"
        cx="12"
        cy="9.5"
        stroke={color}
        strokeWidth={strokeWidth || 2}
      />
      <G fill={color} fillRule="evenodd">
        <Path d="M11 21v-6h2v6z" />
        <Path d="M16.5 19h-9v-2h9z" />
      </G>
    </Svg>
  )
})
export default WomanOutline
