import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const MoreOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M20 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-16 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        fill={color}
      />
    </Svg>
  )
})
export default MoreOutline
