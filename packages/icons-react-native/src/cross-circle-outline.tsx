import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const CrossCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm158.379 225.621a32 32 0 0 1 2.858 41.984l-2.858 3.243L557.269 512l113.11 113.152a32 32 0 0 1-41.984 48.085l-3.243-2.858L512 557.269 398.848 670.38a32 32 0 0 1-48.085-41.984l2.858-3.243L466.731 512 353.62 398.848a32 32 0 0 1 41.984-48.085l3.243 2.858L512 466.731l113.152-113.11a32 32 0 0 1 45.227 0z"
        fill={color}
      />
    </Svg>
  )
})
export default CrossCircleOutline
