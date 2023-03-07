import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const SettingOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M9.142 21.586a9.998 9.998 0 0 1-4.348-2.652 3 3 0 0 0-2.59-4.919A10.044 10.044 0 0 1 2.457 9H2.5a3 3 0 0 0 2.692-4.325 9.984 9.984 0 0 1 4.134-2.313 3 3 0 0 0 5.348 0 9.984 9.984 0 0 1 4.134 2.313A3 3 0 0 0 21.542 9a10.044 10.044 0 0 1 .255 5.015 3 3 0 0 0-2.59 4.919 9.998 9.998 0 0 1-4.349 2.652 3.001 3.001 0 0 0-5.716 0Z"
      />
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </Svg>
  )
})
export default SettingOutline
