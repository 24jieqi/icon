import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const SuccessCircleColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#34B545" cy="12" cx="12" r="12" />
          <Path
            fill="#FFF"
            fillRule="evenodd"
            d="M6.546 5.06h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1"
          />
          <Path
            fill="#34B545"
            fillRule="evenodd"
            d="M11.07 15.146 8.68 13.32a.4.4 0 0 1-.081-.553l.384-.53a.4.4 0 0 1 .567-.082l1.382 1.054a.2.2 0 0 0 .283-.041l3.472-4.779a.4.4 0 0 1 .559-.088l.53.385a.4.4 0 0 1 .088.558l-3.612 4.972-.614.846a.4.4 0 0 1-.566.083"
          />
        </G>
      </Svg>
    )
  },
)
export default SuccessCircleColours
