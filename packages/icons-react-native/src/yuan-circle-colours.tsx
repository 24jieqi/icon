import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { genIcon } from './gen'
const YuanCircleColours = genIcon((color, size, props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
      <Path
        fill="#FFA238"
        d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64Zm219.27 313.809H318.452l-24.943 77.175 170.484-.374v74.61h-151.05L288 606.396l175.994-.387v149.419h89.6V605.813l147.515-.323 24.65-76.27H553.595v-74.807l153.025-.335 24.65-76.27Zm-364.516-89.077 43.09 88.881h96.144l-42.805-88.294-96.429-.587ZM549.432 288l-43.444 89.613h93.822l42.888-88.465L549.432 288Z"
        fillRule="evenodd"
      />
    </Svg>
  )
})
export default YuanCircleColours
