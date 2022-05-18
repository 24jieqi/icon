import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const ApartmentOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M704 160H320c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h384c17.673 0 32-14.327 32-32V192c0-17.673-14.327-32-32-32zM672 224V416H351.999V223.999H672zM448 608H128c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h320c17.673 0 32-14.327 32-32V640c0-17.673-14.327-32-32-32zM416 672V864H159.999V671.999H416zM896 608H576c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h320c17.673 0 32-14.327 32-32V640c0-17.673-14.327-32-32-32zM864 672V864H607.999V671.999H864z" />
      <Path d="M320 640h-64v-64c0-35.346 28.654-64 64-64h160v-64h64v64h160c34.993 0 63.426 28.084 63.991 62.942L768 576v64h-64v-64H320v64z" />
    </Svg>
  )
})
export default ApartmentOutline
