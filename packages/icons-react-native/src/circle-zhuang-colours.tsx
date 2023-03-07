import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleZhuangColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#52C41A" cy="12" cx="12" r="11" />
          <Path
            fill="#FFF"
            d="M7.43 10.391q.26-.081 2.37-1.032V7.602h1.302v4.156H9.799V10.75q-1.588.752-1.79.86l-.58-1.218Zm1.13-2.79.25.238q.68.641.99.98l-.951.791q-.58-.651-1.178-1.25l.888-.758Zm2.929 2.488H13.2v-.6h-1.92V8.332h1.92V7.6h1.319v.73h1.93v1.16h-1.93v.599h1.722v1.152h-4.753v-1.152Zm4.43 6.442q-1.038-.26-1.803-.645-.765-.387-1.345-.924L12.86 16l-2.91.83-.42-1q.192-.08.235-.169.045-.09.045-.351v-.371q-.739.4-1.849.862l-.51-1.272q1.721-.57 2.9-1.348H7.58V11.99h3.769q-.13-.241-.16-.28l1.24-.43q.203.38.362.71h3.678v1.191h-1.168l.638.85q-.388.27-1.12.71.72.318 1.69.52l-.59 1.27Zm-2.23-2.471q.68-.41 1.332-.879h-2.152q.342.479.82.879Zm-2.61 1.27 1.553-.508q-.433-.433-.902-1.153-.18.15-.651.502v1.158Z"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleZhuangColours
