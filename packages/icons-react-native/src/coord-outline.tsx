import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CoordOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        d="M13 17s6-4.111 6-8.864C19 4.747 16.314 2 13 2S7 4.747 7 8.136C7 12.89 13 17 13 17Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M13 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 14H5.023C2.944 14 2 15.125 2 16c0 .874.948 2 3.023 2H13"
        stroke={color}
        strokeWidth={strokeWidth || 2}
      />
      <Path
        d="M9 22h9.977C21.056 22 22 20.875 22 20c0-.874-.948-2-3.023-2H11"
        stroke={color}
        strokeWidth={strokeWidth || 2}
        strokeLinecap="round"
      />
    </Svg>
  )
})
export default CoordOutline
