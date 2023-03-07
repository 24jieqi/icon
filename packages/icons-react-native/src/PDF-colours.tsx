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

const PDFColours = genColoursIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <Defs>
        <LinearGradient x1=".5" y1="0" x2=".5" y2="1" id="bc2d9__b">
          <Stop offset="0%" stopColor="#BF544D" stopOpacity="0" />
          <Stop offset="100%" stopColor="#C54343" />
        </LinearGradient>
        <ClipPath id="bc2d9__a">
          <Rect width="24" height="24" rx="0" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#bc2d9__a)">
        <Path
          d="M2.25 23.25c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6.75h-6A.75.75 0 0 1 15 6V0H3a.75.75 0 0 0-.75.75v22.5Z"
          fill="#ED5454"
        />
        <Path
          d="M16.556 18.133c-.898.046-1.723-.31-2.534-.658-.188-.08-.375-.16-.562-.236-1.368.097-2.698.511-4.007.906-.59.965-1.128 2.041-2.084 2.695-.476.376-1.58.064-1.334-.666.416-1.013 1.448-1.568 2.357-2.077.26-.13.41-.39.542-.638.621-1.19 1.24-2.382 1.743-3.63l-.13-.556c-.234-.985-.473-1.99-.304-3 .083-.514.74-.612 1.148-.454.257.162.383.472.39.766.025.783-.093 1.56-.21 2.332l-.054.365c-.06.356.114.676.279.981l.085.16c.45.831 1.075 1.58 1.902 2.055l.127-.015c.952-.117 1.95-.24 2.88.066.726.249.552 1.592-.234 1.604Zm-5.492-8.11c-.153.804-.088 1.633.118 2.423.303-.773.391-1.716-.118-2.423ZM9.78 17.467c.488-.887.94-1.794 1.293-2.744a7.741 7.741 0 0 0 1.575 1.927c-.974.202-1.933.475-2.868.817Zm7.174-.038c-.736.197-1.443-.133-2.094-.441.12 0 .248-.006.377-.011.618-.026 1.296-.055 1.717.452ZM6.672 20.487c.687-.477 1.15-1.182 1.587-1.88-.628.535-1.216 1.134-1.587 1.88Z"
          fillRule="evenodd"
          fill="#FFF"
        />
        <Path
          transform="rotate(180 21.75 16.5)"
          d="M21.75 26.25h6l-6-9.75v9.75Z"
          fill="url(#bc2d9__b)"
        />
        <Path d="M15 6c0 .414.336.75.75.75h6L15 0v6Z" fill="#FFE7E1" />
      </G>
    </Svg>
  )
})
export default PDFColours
