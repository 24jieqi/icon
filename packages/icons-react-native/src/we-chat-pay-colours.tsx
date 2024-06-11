import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const WeChatPayColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#08BF14" cy="12" cx="12" r="12" />
          <Path
            fill="#FFF"
            d="M4 11.025v-.48c.04-.441.12-.842.24-1.242a6.688 6.688 0 0 1 1.563-2.684c1.001-1.082 2.203-1.763 3.525-2.203a9.116 9.116 0 0 1 2.283-.401c.64-.04 1.242 0 1.882.12.521.08 1.002.2 1.523.4A8.22 8.22 0 0 1 18.26 6.62c.12.12.2.24.32.36-.04 0-.04.04-.08.04-.32.16-.64.32-.96.44a501.084 501.084 0 0 1-6.73 3.085c-.441.2-.882.16-1.282-.08-.32-.2-.601-.4-.921-.6-.2-.16-.401-.281-.641-.441-.2-.12-.32-.04-.32.2v.04c.04.2.08.4.16.6.4.962.8 1.884 1.201 2.845.12.28.32.4.56.36.161 0 .321-.04.442-.12.48-.24.92-.52 1.361-.8 2.444-1.443 4.847-2.885 7.29-4.327.161-.12.361-.2.522-.32 0 .04.04.04.04.08.08.16.16.28.2.44.44.962.64 1.963.56 3.005-.04.44-.12.88-.24 1.321a6.53 6.53 0 0 1-1.442 2.564 7.972 7.972 0 0 1-2.884 2.003c-.64.24-1.282.44-1.923.56-.44.08-.88.12-1.281.12h-.721c-.32-.04-.641-.04-.922-.08-.48-.08-.961-.2-1.402-.36h-.12c-.2.12-.36.24-.56.36a21.89 21.89 0 0 1-1.282.762c-.08.04-.2.08-.28.08-.081 0-.161-.04-.161-.16 0-.08 0-.2.04-.28.08-.601.2-1.162.32-1.763 0-.08 0-.12-.08-.16-.24-.2-.48-.36-.72-.601a7.029 7.029 0 0 1-1.843-2.604 7.98 7.98 0 0 1-.36-1.402c-.04-.2-.04-.4-.04-.64-.081 0-.081-.04-.081-.121Z"
          />
        </G>
      </Svg>
    )
  },
)
export default WeChatPayColours