import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const QuestionOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill={color}
        d="M497.024 825.557a46.933 46.933 0 1 1 0 93.867 46.933 46.933 0 0 1 0-93.867zm0-685.312a230.357 230.357 0 0 1 32 458.454v126.634a32 32 0 0 1-63.701 4.352l-.299-4.352V568.917a32 32 0 0 1 32-32A166.357 166.357 0 1 0 330.667 370.56a32 32 0 0 1-64 0 230.357 230.357 0 0 1 230.357-230.315z"
      />
    </Svg>
  )
})
export default QuestionOutline
