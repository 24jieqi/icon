import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CameraOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M12 9a4.513 4.513 0 0 0-4.5 4.5c0 2.475 2.025 4.5 4.5 4.5s4.5-2.025 4.5-4.5S14.475 9 12 9ZM7.032 6l1.397-3h7.142L17 6"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M21.6 6c.22 0 .4.18.4.4v14.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V6.4c0-.22.18-.4.4-.4h19.2Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
    </Svg>
  )
})
export default CameraOutline
