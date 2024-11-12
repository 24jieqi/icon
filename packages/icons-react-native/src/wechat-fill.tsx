import React from 'react'
import { Svg, Defs, ClipPath, Rect, G, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const WechatFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 16 16" fill="none" width={size} height={size}>
      <Defs>
        <ClipPath id="140273__a">
          <Rect width="16" height="16" rx="0" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#140273__a)">
        <Path
          d="M11.024 5.67a5.58 5.58 0 0 0-.21-.005c-2.572 0-4.657 1.769-4.657 3.95 0 .42.077.825.22 1.205a5.9 5.9 0 0 1-2.337-.312l-1.695.93.512-1.51c-1.216-.798-2-2.05-2-3.457 0-2.409 2.295-4.361 5.127-4.361 2.51 0 4.597 1.534 5.04 3.56Zm-7.55-.647a.757.757 0 1 0 1.514 0 .757.757 0 0 0-1.514 0Zm5.036 0a.757.757 0 1 0-1.514 0 .757.757 0 0 0 1.514 0Zm2.305.921c2.39 0 4.328 1.643 4.328 3.67 0 1.244-.73 2.344-1.847 3.007l.43 1.27-1.48-.812a5.03 5.03 0 0 1-1.431.206c-2.391 0-4.329-1.644-4.329-3.67 0-2.028 1.938-3.67 4.329-3.67ZM8.856 8.482a.606.606 0 1 0 1.212 0 .606.606 0 0 0-1.212 0Zm2.82 0a.606.606 0 1 0 1.212 0 .606.606 0 0 0-1.212 0Z"
          fillRule="evenodd"
          fill={color}
          fillOpacity=".8"
        />
      </G>
    </Svg>
  )
})
export default WechatFill
