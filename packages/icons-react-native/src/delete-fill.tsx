import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const DeleteFill = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M512 62c248.5125 0 450 201.4875 450 450s-201.4875 450-450 450S62 760.5125 62 512 263.4875 62 512 62z m234.37500029 412.49999971H277.62499971a28.125 28.125 0 1 0 0 56.25h468.75000058a28.125 28.125 0 1 0 0-56.25z" />
    </Svg>
  )
})
export default DeleteFill
