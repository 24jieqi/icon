import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const MessageOutline = genOutlineIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G fill={color}>
        <Path
          fillRule="evenodd"
          d="M9.76 18 4 21.2V5h16v13zM18 16H9.24l-.226.126L6 17.8V7h12z"
        />
        <Path d="M9 14V9h2v5zm4 0V9h2v5z" />
      </G>
    </Svg>
  )
})
export default MessageOutline
