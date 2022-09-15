import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const FiltrateOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        d="m213.333 192-5.418.213c-48.128 3.883-75.392 58.88-47.446 99.84l193.024 267.819V768a64 64 0 0 0 64 64H582.87l6.144-.299A64 64 0 0 0 646.87 768V559.787L835.115 292.01C864.043 249.515 833.62 192 782.208 192H213.333zm568.875 64L582.869 540.16V768H417.493V540.16L213.333 256h568.875z"
      />
    </Svg>
  )
})
export default FiltrateOutline
