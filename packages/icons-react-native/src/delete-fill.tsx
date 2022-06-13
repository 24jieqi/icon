import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const DeleteFill = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M512 62c248.512 0 450 201.488 450 450S760.512 962 512 962 62 760.513 62 512 263.488 62 512 62zm234.375 412.5h-468.75a28.125 28.125 0 1 0 0 56.25h468.75a28.125 28.125 0 1 0 0-56.25z"
        fill={color}
      />
    </Svg>
  )
})
export default DeleteFill
