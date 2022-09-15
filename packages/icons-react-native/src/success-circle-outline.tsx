import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm275.968 212.736 10.325 12.075c5.675 5.845 5.547 14.208-1.749 21.333L458.581 710.528c-10.922 10.581-28.8 10.112-40.021-.768L272.81 556.373a17.963 17.963 0 0 1-1.962-24.576l14.293-17.45a19.03 19.03 0 0 1 24.491-3.926l119.765 77.91a22.699 22.699 0 0 0 23.808-1.11L762.71 339.755a19.968 19.968 0 0 1 25.259.981z"
      />
    </Svg>
  )
})
export default SuccessCircleOutline
