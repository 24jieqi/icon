import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SwapRightOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="m873.1 596.2-164-208C703 380.5 693.8 376 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"
        fill={color}
      />
    </Svg>
  )
})
export default SwapRightOutline
