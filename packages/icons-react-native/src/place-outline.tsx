import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const PlaceOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M4.929 16.379C3.119 16.922 2 17.672 2 18.5c0 1.657 4.477 3 10 3s10-1.343 10-3c0-.828-1.12-1.578-2.929-2.121"
      />
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 17.5s6.5-4.248 6.5-9.16C18.5 4.84 15.59 2 12 2S5.5 4.839 5.5 8.34c0 4.912 6.5 9.16 6.5 9.16Z"
      />
      <Path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </Svg>
  )
})
export default PlaceOutline
