import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const TimeColours = genColoursIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 10 10" fill="none" width={size} height={size}>
      <Circle r="5" cx="5" cy="5" fill="#59FFC5" />
      <Path d="M4.5 5.5H8v-1H5.5v-3h-1v4Z" fillRule="evenodd" fill="#616863" />
    </Svg>
  )
})
export default TimeColours
