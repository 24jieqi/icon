import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const CoordOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M466.125 140.739a266.24 266.24 0 0 1 266.24 266.24c0 68.157-36.905 142.745-109.2 227.082l45.63.04a92.16 92.16 0 0 1 6.308 184.116l-6.308.205h-369.05a27.525 27.525 0 0 0-4.055 54.722l4.096.287h537.6a30.72 30.72 0 0 1 4.178 61.153l-4.178.287h-537.64a88.965 88.965 0 0 1-6.35-177.643l6.35-.246 132.464.082a61.768 61.768 0 0 1-7.373-5.735c-148.52-134.676-224.993-246.251-224.993-344.35a266.24 266.24 0 0 1 266.24-266.24zM566.067 695.5c-18.145 18.186-37.683 36.74-58.695 55.787a61.768 61.768 0 0 1-7.373 5.735h168.755a30.72 30.72 0 0 0 4.219-61.195l-4.178-.286zm-99.942-493.322a204.8 204.8 0 0 0-204.8 204.8c0 75.407 68.24 175.022 204.8 298.803 136.52-123.781 204.8-223.396 204.8-298.803a204.8 204.8 0 0 0-204.8-204.8zm0 61.44a143.36 143.36 0 1 1 0 286.72 143.36 143.36 0 0 1 0-286.72zm0 61.44a81.92 81.92 0 1 0 0 163.84 81.92 81.92 0 0 0 0-163.84z"
        fill={color}
      />
    </Svg>
  )
})
export default CoordOutline
