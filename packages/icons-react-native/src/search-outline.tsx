import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SearchOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M222.976 223.189333A365.056 365.056 0 0 1 760.746667 715.946667l1.066666 0.896 129.621334 129.664a32 32 0 0 1-41.984 48.128l-3.285334-2.858667-129.621333-129.664-0.896-1.024A365.056 365.056 0 0 1 222.976 223.146667z m45.226667 45.269334a301.056 301.056 0 1 0 425.770666 425.728 301.056 301.056 0 0 0-425.770666-425.728z" />
    </Svg>
  )
})
export default SearchOutline
