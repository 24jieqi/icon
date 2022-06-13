import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="m818.517 325.163 8.32 8.106c7.254 6.998 6.742 18.176-.853 25.558l-363.733 352c-11.307 10.965-29.867 10.453-41.558-.811l-158.549-153.43a18.645 18.645 0 0 1-2.005-25.514l14.805-18.133a19.755 19.755 0 0 1 25.472-4.054l128.256 82.944c6.741 4.395 18.39 3.84 24.747-1.152l338.858-266.496a20.736 20.736 0 0 1 26.24.982z"
        fill={color}
      />
    </Svg>
  )
})
export default SuccessOutline
