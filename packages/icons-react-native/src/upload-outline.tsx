import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const UploadOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 16.5v-13"
      />
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="m19 8-7-5.5L5 8M4 13.5v8h16v-8"
      />
    </Svg>
  )
})
export default UploadOutline
