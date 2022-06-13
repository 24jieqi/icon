import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SearchOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M222.976 223.19a365.056 365.056 0 0 1 537.77 492.757l1.067.896 129.622 129.664a32 32 0 0 1-41.984 48.128l-3.286-2.859-129.621-129.664-.896-1.024a365.056 365.056 0 0 1-492.672-537.941zm45.227 45.269a301.056 301.056 0 1 0 425.77 425.728 301.056 301.056 0 0 0-425.77-425.728z"
        fill={color}
      />
    </Svg>
  )
})
export default SearchOutline
