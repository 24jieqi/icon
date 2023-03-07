import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ExplainOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M4 2.4c0-.22.18-.4.4-.4h15.2c.22 0 .4.18.4.4v19.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V2.4Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M8 8h8"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13h5"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
      />
    </Svg>
  )
})
export default ExplainOutline
