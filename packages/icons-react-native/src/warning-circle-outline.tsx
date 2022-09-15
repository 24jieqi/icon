import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const WarningCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0 542.933a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zm34.944-402.218c5.76 0 10.368 4.48 10.24 10.666l-6.613 320.939a10.965 10.965 0 0 1-10.539 10.667h-54.528a10.581 10.581 0 0 1-10.539-10.667l-10.24-320.939a10.07 10.07 0 0 1 10.24-10.666h71.979z"
      />
    </Svg>
  )
})
export default WarningCircleOutline
