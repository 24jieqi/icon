import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const EditPenOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        fill={color}
        d="M4 20h16v-2H4zm2.06-7.636v3.535h3.536l8.778-8.778-3.535-3.535zm2 1.536h.708l6.778-6.779-.707-.707-6.778 6.778z"
      />
    </Svg>
  )
})
export default EditPenOutline
