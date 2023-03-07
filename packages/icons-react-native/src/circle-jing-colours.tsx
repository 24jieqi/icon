import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleJingColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#5C7499" cy="12" cx="12" r="11" />
          <Path
            fill="#FFF"
            d="m7.81 11.632-.299-1.25q.339-.42.833-1.306.495-.885.804-1.627l1.23.442q-.26.6-.653 1.309-.394.71-.674 1.08l.618-.029q.43-.69.602-1.002l1.097.602q-.309.59-.71 1.188.883-.26 1.837-.775.954-.514 1.494-1.006H11.11V7.98h4.678v1.2q-.54.59-1.058 1.049l.32.162q1.22.619 1.558.83l-.758 1.15q-.902-.55-2.24-1.29-1.25.84-2.532 1.208l-.59-.98q-.608.921-1.038 1.452l1.15-.24.019 1.25-2.591.42-.3-1.31q.342-.341 1.061-1.34l-.98.09Zm8.34 2.138h-1.87v1.37h2.252v1.29h-5.97v-.642l-2.952.472-.16-1.331 3.23-.53.032.742h2.129v-1.37H10.93v-1.31h5.221v1.31Z"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleJingColours
