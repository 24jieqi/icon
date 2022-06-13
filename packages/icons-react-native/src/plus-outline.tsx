import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const PlusOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M504.3 205.865a30.72 30.72 0 0 1 30.474 26.583l.246 4.137v238.06l256 .04a30.72 30.72 0 0 1 4.177 61.154l-4.177.286h-256v273.9a30.72 30.72 0 0 1-61.154 4.178l-.286-4.178v-273.94l-256 .04a30.72 30.72 0 0 1-4.137-61.153l4.137-.287h256V236.544a30.72 30.72 0 0 1 30.72-30.72z"
        fill={color}
      />
    </Svg>
  )
})
export default PlusOutline
