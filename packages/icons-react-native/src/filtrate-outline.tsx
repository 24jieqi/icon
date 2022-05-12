import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const FiltrateOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M213.333333 192l-5.418666 0.213333c-48.128 3.882667-75.392 58.88-47.445334 99.84l193.024 267.818667V768a64 64 0 0 0 64 64h165.376l6.144-0.298667A64 64 0 0 0 646.869333 768v-208.213333l188.245334-267.776c28.928-42.496-1.493333-100.010667-52.906667-100.010667H213.333333zM782.208 256l-199.338667 284.16V768H417.493333v-227.84L213.333333 256h568.874667z" />
    </Svg>
  )
})
export default FiltrateOutline
