import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const ArrowLeftOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M659.456 148.138667a32 32 0 0 1 48.512 41.472l-3.114667 3.584-318.250666 320.512 319.146666 316.928a32 32 0 0 1 3.242667 41.642666l-3.114667 3.584a32 32 0 0 1-41.642666 3.285334l-3.584-3.114667-341.845334-339.456a32 32 0 0 1-3.242666-41.642667l3.072-3.626666 340.821333-343.168z" />
    </Svg>
  )
})
export default ArrowLeftOutline
