import React from 'react'
import { Svg, G, Circle, Rect, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const TransferCircleColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#0065FE" cy="12" cx="12" r="12" />
          <Rect fill="#FFF" rx="1" height="12" width="16" y="6" x="4" />
          <Path
            fill="#0065FE"
            fillRule="evenodd"
            d="m15.858 10.618-.65-2.326A.4.4 0 0 0 14.822 8h-.624a.4.4 0 0 0-.385.508l.29 1.037a.1.1 0 0 1-.096.127H8.4a.4.4 0 0 0-.4.4v.654c0 .221.18.4.4.4h7.073a.4.4 0 0 0 .385-.508m-7.716 2.738.65 2.326a.4.4 0 0 0 .386.293h.624a.4.4 0 0 0 .385-.508l-.29-1.037a.1.1 0 0 1 .096-.127H15.6a.4.4 0 0 0 .4-.4v-.655a.4.4 0 0 0-.4-.4H8.527a.4.4 0 0 0-.385.508"
          />
        </G>
      </Svg>
    )
  },
)
export default TransferCircleColours
