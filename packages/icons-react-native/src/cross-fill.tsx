import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const CrossFill = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m199.125333 270.208a25.6 25.6 0 0 0-36.224 0L512 475.776 349.098667 312.874667l-3.2-2.688a25.6 25.6 0 0 0-33.024 38.912L475.776 512l-162.901333 162.901333-2.688 3.2a25.6 25.6 0 0 0 38.912 33.024L512 548.224l162.901333 162.901333 3.2 2.688a25.6 25.6 0 0 0 33.024-38.912L548.224 512l162.901333-162.901333 2.688-3.2a25.6 25.6 0 0 0-2.688-33.024z" />
    </Svg>
  )
})
export default CrossFill
