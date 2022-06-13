import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const CrossFill = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M512 42.667C771.2 42.667 981.333 252.8 981.333 512S771.2 981.333 512 981.333 42.667 771.2 42.667 512 252.8 42.667 512 42.667zm199.125 270.208a25.6 25.6 0 0 0-36.224 0L512 475.776 349.099 312.875l-3.2-2.688a25.6 25.6 0 0 0-33.024 38.912L475.776 512 312.875 674.901l-2.688 3.2a25.6 25.6 0 0 0 38.912 33.024L512 548.224l162.901 162.901 3.2 2.688a25.6 25.6 0 0 0 33.024-38.912L548.224 512l162.901-162.901 2.688-3.2a25.6 25.6 0 0 0-2.688-33.024z"
        fill={color}
      />
    </Svg>
  )
})
export default CrossFill
