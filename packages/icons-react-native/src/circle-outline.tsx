import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const CircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        d="M512 85.333c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512 276.352 85.333 512 85.333zM512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z"
      />
    </Svg>
  )
})
export default CircleOutline
