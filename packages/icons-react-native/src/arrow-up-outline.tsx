import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const ArrowUpOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M875.861 659.456a32 32 0 0 1-41.472 48.512l-3.584-3.115-320.512-318.25-316.928 319.146a32 32 0 0 1-41.642 3.243l-3.584-3.115a32 32 0 0 1-3.286-41.642l3.115-3.584 339.456-341.846a32 32 0 0 1 41.643-3.242l3.626 3.072 343.168 340.821z" />
    </Svg>
  )
})
export default ArrowUpOutline
