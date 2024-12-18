import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genFillIcon } from './gen'

const CameraFill = genFillIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 48 48" fill="none" width={size} height={size}>
      <Path
        fillRule="evenodd"
        fill={color}
        d="M36.74 13.609c1.255 0 2.342.416 3.265 1.34.923.922 1.34 2.01 1.337 3.269V34.39c0 1.259-.417 2.346-1.34 3.27-.92.92-2.01 1.339-3.266 1.339H11.264c-1.255 0-2.343-.416-3.266-1.34-.92-.923-1.34-2.013-1.34-3.269V18.218c0-1.259.417-2.347 1.34-3.27.92-.92 2.01-1.34 3.266-1.34h4.106l1.007-2.43c.248-.584.668-1.087 1.255-1.507S18.804 9 19.475 9h9.218c.587 0 1.255.252 1.843.671.584.417 1.004.92 1.255 1.508l.923 2.43zm-20.367 12.4c0 4.193 3.438 7.627 7.627 7.627 4.19 0 7.627-3.434 7.627-7.627 0-4.192-3.434-7.627-7.627-7.627s-7.627 3.438-7.627 7.627zm2.514.087a5.079 5.079 0 0 1 5.112-5.113 5.079 5.079 0 0 1 5.113 5.113 5.079 5.079 0 0 1-5.113 5.112 5.079 5.079 0 0 1-5.112-5.112z"
      />
    </Svg>
  )
})
export default CameraFill
