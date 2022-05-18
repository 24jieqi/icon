import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const YuanCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M511 64c247.424 0 448 200.576 448 448S758.424 960 511 960 63 759.424 63 512 263.576 64 511 64z m0 64c-212.077 0-384 171.923-384 384s171.923 384 384 384 384-171.923 384-384-171.923-384-384-384z m84.954 205.607c12.195-12.456 32.173-12.869 44.872-0.833 12.827 12.157 13.371 32.41 1.214 45.238l-47.474 50.091H668c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996l-0.53 0.004H544.072v73.974H668c17.673 0 32 14.327 32 32 0 17.497-14.042 31.713-31.47 31.996l-0.53 0.004H544.072V712c0 17.673-14.326 32-32 32-17.496 0-31.713-14.042-31.995-31.47l-0.005-0.53v-81.923H351c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l0.53-0.004h129.072v-73.974H351c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l0.53-0.004h80.854l-47.472-50.09c-12.157-12.828-11.614-33.082 1.214-45.24 12.7-12.035 32.677-11.622 44.871 0.834l0.367 0.38 82.376 86.92 82.377-86.92z" />
    </Svg>
  )
})
export default YuanCircleOutline
