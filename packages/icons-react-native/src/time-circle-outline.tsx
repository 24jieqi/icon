import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const TimeCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1066 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M546.688 64c247.381333 0 448 200.576 448 448s-200.618667 448-448 448c-247.466667 0-448-200.576-448-448s200.533333-448 448-448z m0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 126.037333a32 32 0 0 1 31.701333 27.690667l0.298667 4.309333v193.962667h121.386667a32 32 0 0 1 31.744 27.648l0.256 4.352a32 32 0 0 1-27.648 31.701333l-4.352 0.298667h-153.429334a32 32 0 0 1-31.701333-27.648L514.645333 512V286.037333a32 32 0 0 1 32-32z" />
    </Svg>
  )
})
export default TimeCircleOutline
