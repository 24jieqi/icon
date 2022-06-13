import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const MobileScreenOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M554.667 149.333a64 64 0 0 1 64 64v181.248h326.016a32 32 0 0 1 31.701 27.691l.299 4.352v416.043a32 32 0 0 1-27.648 31.701l-4.352.299H556.16l-.043-.086-1.45.086H128a64 64 0 0 1-64-64V213.333a64 64 0 0 1 64-64zm0 64H128v597.334h426.667V213.333zm358.016 245.248H618.667v352.086h294.016V458.58zM465.109 672a32 32 0 0 1 4.31 63.701l-4.352.299h-256a32 32 0 0 1-4.352-63.701l4.352-.299h256z"
        fill={color}
      />
    </Svg>
  )
})
export default MobileScreenOutline
