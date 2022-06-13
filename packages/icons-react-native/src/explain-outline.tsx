import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const ExplainOutline = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        d="M799.17 153.6a61.44 61.44 0 0 1 61.44 61.44v645.12a61.44 61.44 0 0 1-61.44 61.44H225.73a61.44 61.44 0 0 1-61.44-61.44V215.04a61.44 61.44 0 0 1 61.44-61.44zm0 61.44H225.73v645.12h573.44V215.04zM570.533 665.6a30.72 30.72 0 0 1 4.137 61.153l-4.137.287h-236.34a30.72 30.72 0 0 1-4.177-61.153l4.178-.287h236.339zm-88.474-163.84a30.72 30.72 0 0 1 4.137 61.153l-4.137.287H334.193a30.72 30.72 0 0 1-4.178-61.153l4.178-.287h147.865zM693.33 337.92a30.72 30.72 0 0 1 4.178 61.153l-4.178.287H334.234a30.72 30.72 0 0 1-4.178-61.153l4.178-.287H693.37z"
        fill={color}
      />
    </Svg>
  )
})
export default ExplainOutline
