import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessFill = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M512 85.333c235.648 0 426.667 191.019 426.667 426.667S747.648 938.667 512 938.667 85.333 747.648 85.333 512 276.352 85.333 512 85.333zM767.403 356.31a17.28 17.28 0 0 0-21.846-.853L463.147 577.58a19.627 19.627 0 0 1-20.608.938L335.7 509.397a16.47 16.47 0 0 0-21.248 3.414l-12.373 15.061a15.573 15.573 0 0 0 1.707 21.29l132.138 127.873c9.686 9.386 25.174 9.813 34.603.64L773.632 384.34c6.357-6.144 6.827-15.445.725-21.333z"
        fill={color}
      />
    </Svg>
  )
})
export default SuccessFill
