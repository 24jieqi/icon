import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const QuestionCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1066 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M514.645333 64c247.466667 0 448 200.576 448 448s-200.533333 448-448 448c-247.424 0-448-200.576-448-448s200.576-448 448-448z m0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 560.085333a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4z m0-462.506666a160 160 0 0 1 32.042667 316.8v72.106666a32 32 0 0 1-63.744 4.352l-0.298667-4.309333v-100.949333a32 32 0 0 1 32-32 96 96 0 1 0-96-96 32 32 0 0 1-64 0 160 160 0 0 1 160-160z" />
    </Svg>
  )
})
export default QuestionCircleOutline
