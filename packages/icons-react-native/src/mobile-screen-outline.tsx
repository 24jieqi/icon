import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const MobileScreenOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M554.666667 149.333333A64 64 0 0 1 618.666667 213.333333v181.248h326.016a32 32 0 0 1 31.701333 27.690667l0.298667 4.352v416.042667a32 32 0 0 1-27.648 31.701333l-4.352 0.298667h-388.522667l-0.042667-0.085334L554.666667 874.666667H128A64 64 0 0 1 64 810.666667V213.333333A64 64 0 0 1 128 149.333333zM554.666667 213.333333H128v597.333334h426.666667V213.333333z m358.016 245.248H618.666667V810.666667h294.016v-352.085334z m-447.573334 213.418667a32 32 0 0 1 4.309334 63.701333l-4.352 0.298667H209.066667a32 32 0 0 1-4.352-63.701333l4.352-0.298667H465.066667z" />
    </Svg>
  )
})
export default MobileScreenOutline
