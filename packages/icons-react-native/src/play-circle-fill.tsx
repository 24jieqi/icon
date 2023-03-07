import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const PlayCircleFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle fill={color} cy="12" cx="12" r="10" />
      <Path
        fill="#FFF"
        d="M10.65 15.48a.4.4 0 0 1-.65-.312V8.832a.4.4 0 0 1 .65-.312l3.96 3.168a.4.4 0 0 1 0 .624l-3.96 3.168Z"
      />
    </Svg>
  )
})
export default PlayCircleFill
