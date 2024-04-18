import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const DraftsOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fill={color} fillRule="evenodd">
        <Path d="M3 8v12h18V8zm2 10h14v-8H5z" />
        <Path d="m5.417 4-1.75 6h16.666l-1.75-6zm.916 4h11.334l-.584-2H6.917z" />
        <Path d="m7.72 8 1.5 6h5.56l1.5-6zm3.06 4-.5-2h3.44l-.5 2z" />
      </G>
    </Svg>
  )
})
export default DraftsOutline
