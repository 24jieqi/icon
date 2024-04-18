import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const LikeFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <G fill={color}>
        <Path d="M3 12h8.5L13 6H9.5l1-3-1-.5-3 3.5H3z" />
        <Path
          d="M2.5 12.5h9.39l1.75-7h-3.446l.917-2.753-1.737-.869L6.27 5.5H2.5zm8.61-1H3.5v-5h3.23l2.896-3.378.263.131L8.806 6.5h3.554z"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  )
})
export default LikeFill
