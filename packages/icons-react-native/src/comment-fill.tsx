import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const CommentFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <G fill={color}>
        <Path d="M3 11h2.5v1.5l2-1.5H13V4H3z" />
        <Path
          d="M2.5 3.5v8H5v2l2.667-2H13.5v-8zm1 7H6v1l1.333-1H12.5v-6h-9z"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  )
})
export default CommentFill
