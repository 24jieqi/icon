import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const UserFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle fill={color} cy="12" cx="12" r="10" />
      <Path
        fill="#FFF"
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-4.5 4a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v1.6a.4.4 0 0 1-.4.4H7.9a.4.4 0 0 1-.4-.4v-1.6Z"
      />
    </Svg>
  )
})
export default UserFill
