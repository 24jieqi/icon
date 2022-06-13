import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const ArrowLeftOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M659.456 148.139a32 32 0 0 1 48.512 41.472l-3.115 3.584-318.25 320.512 319.146 316.928a32 32 0 0 1 3.243 41.642l-3.115 3.584a32 32 0 0 1-41.642 3.286l-3.584-3.115-341.846-339.456a32 32 0 0 1-3.242-41.643l3.072-3.626 340.821-343.168z"
        fill={color}
      />
    </Svg>
  )
})
export default ArrowLeftOutline
