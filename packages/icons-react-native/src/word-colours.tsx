import React from 'react'
import {
  Svg,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
  G,
  Path,
} from 'react-native-svg'

import { genColoursIcon } from './gen'

const WordColours = genColoursIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Defs>
        <LinearGradient x1=".5" y1="0" x2=".5" y2="1" id="bc2d2__b">
          <Stop offset="0%" stopColor="#4DA6BF" stopOpacity="0" />
          <Stop offset="100%" stopColor="#5091D6" />
        </LinearGradient>
        <ClipPath id="bc2d2__a">
          <Rect width="24" height="24" rx="0" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#bc2d2__a)">
        <Path
          d="M2.25 23.25c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6.75h-6A.75.75 0 0 1 15 6V0H3a.75.75 0 0 0-.75.75v22.5Z"
          fill="#54ADED"
        />
        <Path
          transform="rotate(180 21.75 16.5)"
          d="M21.75 26.25h6l-6-9.75v9.75Z"
          fill="url(#bc2d2__b)"
        />
        <Path d="M15 6c0 .414.336.75.75.75h6L15 0v6Z" fill="#C8EAFF" />
        <Rect
          x="6"
          y="12.75"
          width="11.25"
          height="1.5"
          rx=".375"
          fill="#FFF"
        />
        <Rect
          x="6"
          y="15.75"
          width="11.25"
          height="1.5"
          rx=".375"
          fill="#FFF"
        />
        <Rect x="6" y="18.75" width="4.5" height="1.5" rx=".375" fill="#FFF" />
      </G>
    </Svg>
  )
})
export default WordColours
