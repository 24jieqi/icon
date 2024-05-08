import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const LockOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fill={color} fillRule="evenodd">
        <Path d="M3 22V6h18v16zM19 8H5v12h14z" />
        <Path d="M7 8V2h10v6zm8-4H9v2h6zm-4 13v-6h2v6z" />
      </G>
    </Svg>
  )
})
export default LockOutline
