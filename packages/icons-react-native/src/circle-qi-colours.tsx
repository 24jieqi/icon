import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleQiColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#3EAACF" cy="12" cx="12" r="11" />
          <Path
            fill="#FFF"
            d="m16.508 15.29-.227 1.3H11.72q-1.07 0-1.768-.242-.693-.237-1.132-.817-.14.54-.44 1.188l-1-.638q.32-.882.43-1.647.111-.765.111-2.174H9.14q0 .94-.04 1.569.222.582.59.901v-2.819H7.53V10.64H9.2V9.8H7.78V8.61H9.2v-.94h1.308v.94h1.302V9.8h-1.3v.84h1.572v1.272h-1.12v.99H12v1.208h-1.038v1.133q.449.048.908.048h4.638Zm-1.81-4.922v-1.11h-2.457V7.96h3.75v3.7H13.67v1.488q0 .251.036.352.036.1.133.137.101.032.332.032h.31q.299 0 .43-.032.13-.036.168-.127.04-.091.04-.3l.032-.85 1.25.29q-.033.68-.072.97-.058.57-.195.847-.133.273-.423.384-.29.11-.872.11H13.75q-.52 0-.827-.146-.306-.146-.439-.475-.133-.329-.133-.899v-3.073h2.347Z"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleQiColours
