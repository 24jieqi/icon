import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const FileOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M3 20h18V6.66h-7.625L10.125 4H3v16Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M8 15.5h8"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
      />
    </Svg>
  )
})
export default FileOutline
