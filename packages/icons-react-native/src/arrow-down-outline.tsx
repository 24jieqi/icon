import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const ArrowDownOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M148.139 364.544a32 32 0 0 1 41.472-48.512l3.584 3.115 320.512 318.25 316.928-319.146a32 32 0 0 1 41.642-3.243l3.584 3.115a32 32 0 0 1 3.286 41.642l-3.115 3.584-339.456 341.846a32 32 0 0 1-41.643 3.242l-3.626-3.072-343.168-340.821z" />
    </Svg>
  )
})
export default ArrowDownOutline
