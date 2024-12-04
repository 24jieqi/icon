import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const QuitOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fillRule="evenodd" fill={color}>
        <Path d="M15 6v.75h2V4H4v16h13v-3.333h-2V18H6V6z" />
        <Path d="m18.657 13.036-1.829 1.828 1.415 1.414 4.242-4.242-4.242-4.243-1.415 1.414 1.829 1.829H14v2z" />
      </G>
    </Svg>
  )
})
export default QuitOutline
