import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const ArrowRightOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M364.544 875.861a32 32 0 0 1-48.512-41.472l3.115-3.584 318.25-320.512-319.146-316.928a32 32 0 0 1-3.243-41.642l3.115-3.584a32 32 0 0 1 41.642-3.286l3.584 3.115 341.846 339.456a32 32 0 0 1 3.242 41.643l-3.072 3.626-340.821 343.168z" />
    </Svg>
  )
})
export default ArrowRightOutline
