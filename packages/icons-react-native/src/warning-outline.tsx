import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const WarningOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M563.2 128H460.8v512h102.4V128zm0 665.856H460.8V896h102.4V793.856z"
        fill={color}
      />
    </Svg>
  )
})
export default WarningOutline
