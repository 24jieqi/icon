import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const SuccessFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle fill={color} cy="12" cx="12" r="10" />
      <Path
        fill="#FFF"
        d="M15.293 9.293a1 1 0 0 1 1.415 1.414l-1.415-1.414Zm-4.758 6.172.707.707a1 1 0 0 1-1.414 0l.707-.707Zm-4.242-2.828a1 1 0 0 1 1.414-1.415l-1.414 1.415Zm10.415-1.93-5.466 5.465-1.414-1.414 5.465-5.465 1.415 1.414Zm-6.88 5.465-3.535-3.535 1.414-1.415 3.535 3.536-1.414 1.414Z"
      />
    </Svg>
  )
})
export default SuccessFill
