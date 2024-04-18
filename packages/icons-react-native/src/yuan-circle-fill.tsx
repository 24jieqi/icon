import React from 'react'
import { Svg, Circle, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const YuanCircleFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle fill={color} cy="12" cx="12" r="10" />
      <Path
        fill="#FFF"
        d="M10.268 7.36a1 1 0 1 0-1.536 1.28l1.536-1.28ZM12 11l-.768.64a1 1 0 0 0 1.536 0L12 11Zm3.268-2.36a1 1 0 1 0-1.536-1.28l1.536 1.28Zm-6.536 0 2.5 3 1.536-1.28-2.5-3-1.536 1.28Zm4.036 3 2.5-3-1.536-1.28-2.5 3 1.536 1.28ZM9 13a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 0 0 0-2v2Zm-6 0h6v-2H9v2Z"
      />
      <Path
        fill="#FFF"
        d="M9 10a1 1 0 1 0 0 2v-2Zm6 2a1 1 0 0 0 0-2v2Zm-6 0h6v-2H9v2Z"
      />
      <Path
        fill="#FFF"
        d="M13 11a1 1 0 0 0-2 0h2Zm-2 6a1 1 0 0 0 2 0h-2Zm0-6v6h2v-6h-2Z"
      />
    </Svg>
  )
})
export default YuanCircleFill
