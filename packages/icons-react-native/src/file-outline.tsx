import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const FileOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M170.667 768V256c0-47.129 38.205-85.334 85.333-85.334h225.332l80.134 128H768c47.129 0 85.334 38.205 85.334 85.334v384c0 47.127-38.205 85.332-85.334 85.332H256c-47.128 0-85.333-38.205-85.333-85.332ZM256 234.666h189.892l80.133 128H768q4.383 0 8.285 1.65 3.817 1.616 6.8 4.598 2.984 2.984 4.598 6.801 1.65 3.902 1.65 8.285v384q0 4.383-1.65 8.283-1.614 3.819-4.598 6.801-2.983 2.984-6.8 4.598-3.902 1.65-8.285 1.65H256q-4.383 0-8.284-1.65-3.817-1.614-6.8-4.598-2.985-2.982-4.6-6.801-1.65-3.9-1.65-8.283V256q0-4.383 1.65-8.285 1.615-3.817 4.6-6.801 2.983-2.984 6.8-4.598 3.901-1.65 8.284-1.65Zm426.667 362.668H341.334v64h341.333v-64Z"
      />
    </Svg>
  )
})
export default FileOutline
