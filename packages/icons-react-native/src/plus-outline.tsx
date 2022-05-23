import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const PlusOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M504.29952 205.86496a30.72 30.72 0 0 1 30.47424 26.58304l0.24576 4.13696v238.05952l256 0.04096a30.72 30.72 0 0 1 4.17792 61.15328l-4.17792 0.28672h-256v273.89952a30.72 30.72 0 0 1-61.15328 4.17792l-0.28672-4.17792v-273.94048l-256 0.04096a30.72 30.72 0 0 1-4.13696-61.15328l4.13696-0.28672h256V236.544a30.72 30.72 0 0 1 30.72-30.72z" />
    </Svg>
  )
})
export default PlusOutline
