import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const ContainerOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M191.507 136l736.709 4.967c17.412 0.117 31.5 14.125 31.784 31.472v505.416c0 17.497-14.042 31.714-31.47 32h-95.468v146.67c0 17.497-14.041 31.714-31.47 31.996l-0.53 0.005H96c-17.673 0-32-14.327-32-32v-556.77c0-17.674 14.327-32 32-32l63.291-0.001V168c0-17.58 14.171-31.831 31.684-32h0.532z m577.555 195.755H128v492.77h641.062v-492.77z m-544.44 104.816c17.495 0 31.712 14.041 31.995 31.47l0.004 0.53v241.027c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.471l-0.004-0.53V468.572c0-17.673 14.327-32 32-32z m223.91 0c17.496 0 31.712 14.041 31.995 31.47l0.004 0.53v241.027c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.995-31.471l-0.005-0.53V468.572c0-17.673 14.327-32 32-32z m223.491 0c17.497 0 31.714 14.041 31.996 31.47l0.004 0.53v241.027c0 17.673-14.326 32-32 32-17.496 0-31.713-14.042-31.995-31.471l-0.005-0.53V468.572c0-17.673 14.327-32 32-32zM223.291 200.216v67.539h577.771c17.497 0 31.714 14.042 31.996 31.471l0.005 0.53-0.001 346.099H896V204.751l-672.709-4.535z" />
    </Svg>
  )
})
export default ContainerOutline
