import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const WeChatOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M18 7.145a8.007 8.007 0 0 0-1.931-2.851A8.392 8.392 0 0 0 10.27 2C5.703 2 2 5.579 2 9.994c0 2.083.825 3.98 2.176 5.404L3.556 19l3.678-1.527a11.602 11.602 0 0 0 1.492.374"
      />
      <Path
        fill={color}
        d="M7.25 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm6 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      />
      <Path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={strokeWidth || 2}
        stroke={color}
        d="M19.38 19.965A5.25 5.25 0 1 1 21 17.987m.001-.001L21.5 21l-2.12-1.035"
      />
      <Path
        fill={color}
        d="M18 15.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3.5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      />
    </Svg>
  )
})
export default WeChatOutline
