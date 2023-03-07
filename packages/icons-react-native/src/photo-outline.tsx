import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const PhotoOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M8 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M21.6 4c.22 0 .4.18.4.4v15.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h19.2Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="m7 20 10-10 5 5"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
    </Svg>
  )
})
export default PhotoOutline
