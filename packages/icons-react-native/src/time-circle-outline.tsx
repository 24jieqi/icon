import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const TimeCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1066 1024" width={size} height={size}>
      <Path
        d="M546.688 64c247.381 0 448 200.576 448 448s-200.619 448-448 448c-247.467 0-448-200.576-448-448s200.533-448 448-448zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0 126.037a32 32 0 0 1 31.701 27.691l.299 4.31V480h121.387a32 32 0 0 1 31.744 27.648l.256 4.352a32 32 0 0 1-27.648 31.701l-4.352.299h-153.43a32 32 0 0 1-31.701-27.648l-.299-4.352V286.037a32 32 0 0 1 32-32z"
        fill={color}
      />
    </Svg>
  )
})
export default TimeCircleOutline
