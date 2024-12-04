import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const DeleteMiniOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G fill={color}>
          <Path d="M9 11h2v5H9zm8-7v2H7V4zm-4 7h2v5h-2z" />
          <Path fillRule="evenodd" d="M4 7v14h16V7zm2 12h12V9H6z" />
        </G>
      </Svg>
    )
  },
)
export default DeleteMiniOutline
