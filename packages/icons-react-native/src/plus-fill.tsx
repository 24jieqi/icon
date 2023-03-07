import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const PlusFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle fill={color} cy="12" cx="12" r="10" />
      <Path fill="#FFF" d="M8 13h8v-2H8v2Z" />
      <Path fill="#FFF" d="M11.004 8.004v8h2v-8h-2Z" />
    </Svg>
  )
})
export default PlusFill
