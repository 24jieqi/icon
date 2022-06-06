import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zM512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m275.968 212.736l10.325333 12.074667c5.674667 5.845333 5.546667 14.208-1.749333 21.333333l-337.962667 336.384c-10.922667 10.581333-28.8 10.112-40.021333-0.768L272.810667 556.373333a17.962667 17.962667 0 0 1-1.962667-24.576l14.293333-17.450666a19.029333 19.029333 0 0 1 24.490667-3.925334l119.765333 77.909334a22.698667 22.698667 0 0 0 23.808-1.109334l309.504-247.466666a19.968 19.968 0 0 1 25.258667 0.981333z" />
    </Svg>
  )
})
export default SuccessCircleOutline
