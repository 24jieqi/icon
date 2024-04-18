import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CommentOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <Path
        d="M2.5 3.5v8H5v2l2.667-2H13.5v-8zm1 7H6v1l1.333-1H12.5v-6h-9z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
})
export default CommentOutline
