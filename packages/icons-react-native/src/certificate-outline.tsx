import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genOutlineIcon } from './gen'

const CertificateOutline = genOutlineIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <Path
          d="M9 18h6"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
        />
        <Path
          d="m12 5 1.474 3.055L17 8.438l-2.615 2.27L15.09 14 12 12.348 8.91 14l.705-3.292L7 8.438l3.526-.383L12 5Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4 2.4c0-.22.18-.4.4-.4h15.2c.22 0 .4.18.4.4v19.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V2.4Z"
          stroke={color}
          strokeWidth={strokeWidth || 2}
          strokeLinejoin="round"
        />
      </Svg>
    )
  },
)
export default CertificateOutline
