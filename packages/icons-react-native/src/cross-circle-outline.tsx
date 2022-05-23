import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const CrossCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64zM512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m158.378667 225.621333a32 32 0 0 1 2.858666 41.984l-2.858666 3.242667L557.269333 512l113.109334 113.152a32 32 0 0 1-41.984 48.085333l-3.242667-2.858666L512 557.269333l-113.152 113.109334a32 32 0 0 1-48.085333-41.984l2.858666-3.242667L466.730667 512 353.621333 398.848a32 32 0 0 1 41.984-48.085333l3.242667 2.858666L512 466.730667l113.152-113.109334a32 32 0 0 1 45.226667 0z" />
    </Svg>
  )
})
export default CrossCircleOutline
