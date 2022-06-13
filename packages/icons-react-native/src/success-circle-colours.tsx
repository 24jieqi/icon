import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessCircleColours = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fillRule="evenodd"
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64Zm214.532 188.9h-425.6c-16.33 0-29.6 13.105-29.863 29.373l-.004.493V745.7c0 16.33 13.106 29.599 29.373 29.862l.494.004h425.6c16.33 0 29.599-13.105 29.862-29.372l.004-.494V282.766c0-16.494-13.371-29.866-29.866-29.866ZM621.084 365.174l43.932 31.918L489.464 638.72l-113.058-86.247 31.919-43.932 69.871 53.301 142.888-196.667Z"
        fill="#34B545"
      />
    </Svg>
  )
})
export default SuccessCircleColours
