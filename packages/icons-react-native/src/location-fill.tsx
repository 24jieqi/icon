import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const LocationFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fill={color}
        d="M12 21s8-6.514 8-11.005A7.997 7.997 0 0 0 12 2C7.582 2 4 5.58 4 9.995 4 14.485 12 21 12 21Z"
      />
      <Path
        fill="#FFF"
        d="M12 14a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2Zm4-4a4 4 0 0 0-4-4v2a2 2 0 0 1 2 2h2Zm-4-4a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V6Zm-4 4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2H8Z"
      />
    </Svg>
  )
})
export default LocationFill
