import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const SuccessOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M818.517333 325.162667l8.32 8.106666c7.253333 6.997333 6.741333 18.176-0.853333 25.557334l-363.733333 352c-11.306667 10.965333-29.866667 10.453333-41.557334-0.810667l-158.549333-153.429333a18.645333 18.645333 0 0 1-2.005333-25.514667l14.805333-18.133333a19.754667 19.754667 0 0 1 25.472-4.053334l128.256 82.944c6.741333 4.394667 18.389333 3.84 24.746667-1.152l338.858666-266.496a20.736 20.736 0 0 1 26.24 0.981334z" />
    </Svg>
  )
})
export default SuccessOutline
