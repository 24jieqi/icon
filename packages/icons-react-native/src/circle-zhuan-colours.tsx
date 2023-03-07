import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleZhuanColours = genColoursIcon(
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
            d="M16.45 11.771h-3.1q-.172.499-.22.629h2.972v1.279q-.26.202-1.192 1.53l.97.462-.589 1.16-.39-.2q-2.37-1.2-3.311-1.61l.51-1.11q.411.159 1.4.627l.251.12q.339-.448.518-.673.182-.225.322-.325H11.77v-1.28q.192-.52.221-.609h-.67v1.14h-.68v.69q-.111.02.709-.12l.033.758.029.55-.772.12v1.8H9.29v-1.588l-.31.049q-1.068.17-1.338.231l-.12-1.35q.39-.02 1.767-.232v-.908h-1.67v-1.28q.372-.69.752-1.822h-.859V8.58h1.24q.13-.442.28-1.041l1.328.11q-.088.349-.26.931h1.25v1.23H9.69q-.508 1.403-.74 1.852h.61V10.21h1.08v1.452h.68V10.5h1.033l.15-.629h-.922V8.63h1.178q.062-.3.173-1.07l1.38.08q-.1.6-.192.99h2.132v1.24H13.85l-.15.629h2.75v1.272Z"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleZhuanColours
