import React from 'react'
import { Svg, Circle, G, Ellipse, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const WeChatColours = genColoursIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Circle r="12" cx="12" cy="12" fill="#07C160" />
      <G>
        <Ellipse cx="10.5" cy="10.25" rx="5" ry="4.25" fill="#FFF" />
        <Ellipse cx="14.25" cy="14" rx="4.25" ry="3.5" fill="#FFF" />
        <Ellipse
          cx="14.25"
          cy="14"
          rx="4.25"
          ry="3.5"
          stroke="#07C160"
          strokeWidth=".5"
        />
      </G>
      <G>
        <Circle r=".625" cx="8.875" cy="9.125" fill="#07C160" />
        <Circle r=".625" cx="12.125" cy="9.125" fill="#07C160" />
        <Circle r=".5" cx="12.75" cy="13.25" fill="#07C160" />
        <Circle r=".5" cx="15.75" cy="13.25" fill="#07C160" />
        <Path d="m6.75 15 2-1-1.5-.75-.5 1.75z" fill="#FFF" />
      </G>
      <Path d="m17.5 17.75-2-1L17 16l.5 1.75z" fill="#FFF" />
    </Svg>
  )
})
export default WeChatColours
