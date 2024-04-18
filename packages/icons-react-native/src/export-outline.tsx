import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const ExportOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fill={color} fillRule="evenodd">
        <Path d="M6 8h5V6H4v14h14v-7h-2v5H6z" />
        <Path d="M18 7.414V10h2V4h-6v2h2.586l-3.293 3.293 1.414 1.414z" />
      </G>
    </Svg>
  )
})
export default ExportOutline
