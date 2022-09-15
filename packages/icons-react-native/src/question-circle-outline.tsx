import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const QuestionCircleOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1066 1024" width={size} height={size}>
      <Path
        fill={color}
        d="M514.645 64c247.467 0 448 200.576 448 448s-200.533 448-448 448c-247.424 0-448-200.576-448-448s200.576-448 448-448zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0 560.085a51.2 51.2 0 1 1 0 102.4 51.2 51.2 0 0 1 0-102.4zm0-462.506a160 160 0 0 1 32.043 316.8v72.106a32 32 0 0 1-63.744 4.352l-.299-4.309v-100.95a32 32 0 0 1 32-32 96 96 0 1 0-96-96 32 32 0 0 1-64 0 160 160 0 0 1 160-160z"
      />
    </Svg>
  )
})
export default QuestionCircleOutline
