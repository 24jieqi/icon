import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const YuanCircleColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#FF9B2A" cy="12" cx="12" r="12" />
          <Path
            fill="#FFF"
            fillRule="evenodd"
            d="M10.942 6.237 11.91 8.3H9.524l-.831-1.773a.355.355 0 0 1 .323-.506l1.607.01c.137.001.261.08.32.205m1.947-.03L11.91 8.3h2.328l.83-1.773a.355.355 0 0 0-.316-.506l-1.536-.02a.355.355 0 0 0-.326.205m4.127 2.1h-9.5c-.156 0-.293.1-.34.248l-.396 1.271c-.072.229.1.461.34.46l3.39-.007c.197 0 .356.159.356.355v1.204a.355.355 0 0 1-.354.355H7.38c-.155 0-.293.1-.339.249l-.397 1.27c-.071.23.1.462.34.461l3.528-.008c.196 0 .355.159.355.355v3.125c0 .196.16.355.355.355h1.514a.355.355 0 0 0 .355-.355v-3.132c0-.195.158-.354.354-.355l3.046-.006a.355.355 0 0 0 .338-.25l.39-1.248a.355.355 0 0 0-.338-.461h-3.435a.355.355 0 0 1-.355-.355v-1.21c0-.196.158-.355.354-.356l3.183-.007a.355.355 0 0 0 .338-.249l.39-1.249a.355.355 0 0 0-.339-.46"
          />
        </G>
      </Svg>
    )
  },
)
export default YuanCircleColours
