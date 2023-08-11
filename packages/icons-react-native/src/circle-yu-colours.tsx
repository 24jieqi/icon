import React from 'react'
import { Svg, Defs, ClipPath, Rect, Circle, G, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleYuColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Defs>
          <ClipPath id="e4401__a">
            <Rect x="4.8" y="6" width="14.4" height="12" rx="0" />
          </ClipPath>
        </Defs>
        <Circle r="12" cx="12" cy="12" fill="#7566FF" />
        <G clipPath="url(#e4401__a)">
          <Path
            d="M10.488 10.24c.666 0 .987.272.948.83l-.153 3.125H9.438l.14-3.017c0-.136-.076-.204-.23-.204h-.55v6.251c0 .53-.308.789-.936.789H5.646l-.462-.72h1.102c.154 0 .23-.069.23-.19V10.96H4.8v-.72h.717l-.589-2.446h2.024l.602 2.446h.564l.833-3.275c.051-.163-.051-.245-.243-.245H4.954V6h5.137c.333 0 .602.095.794.285.193.19.257.435.18.707l-.846 3.248h.269Zm6.342-3.52-.538 1.604h1.627c.628 0 .948.272.948.802v6.387h-1.742L19.11 18h-2.472l-1.14-1.373L14.255 18h-2.537l2.217-2.487h-1.897V9.18c0-.57.334-.856 1.025-.856h.795l.538-1.604h-2.69V6h7.468v.72h-2.37.026Zm.102 2.596c0-.19-.102-.285-.333-.285h-2.267c-.23 0-.333.095-.333.285v6.143l.448-.503q.077-.136.077-.19V10.24h1.922v4.39l.512.638V9.316h-.026Z"
            fill="#FFF"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleYuColours
