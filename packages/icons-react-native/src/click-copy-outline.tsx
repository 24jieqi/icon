import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './gen'
const ClickCopyOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1066 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M713.216 209.493333c44.757333 0 81.066667 36.352 81.066667 81.066667v563.2a81.066667 81.066667 0 0 1-81.066667 81.066667H199.765333a81.066667 81.066667 0 0 1-81.066666-81.066667V290.56c0-44.714667 36.309333-81.066667 81.066666-81.066667z m0 64H199.765333a17.066667 17.066667 0 0 0-17.066666 17.066667v563.2c0 9.472 7.68 17.066667 17.066666 17.066667h513.450667a17.066667 17.066667 0 0 0 17.066667-17.066667V290.56a17.066667 17.066667 0 0 0-17.066667-17.066667zM262.144 96.64l529.237333 0.725333a117.333333 117.333333 0 0 1 116.906667 110.208l0.256 7.125334v585.813333a32 32 0 0 1-63.701333 4.309333l-0.298667-4.309333V214.613333a53.333333 53.333333 0 0 0-47.786667-53.034666l-5.461333-0.298667-529.237333-0.725333a32 32 0 0 1-4.266667-63.701334l4.352-0.298666z m195.84 329.941333a32 32 0 0 1 31.701333 27.648l0.298667 4.352v81.621334h81.664a32 32 0 0 1 4.352 63.744l-4.352 0.298666h-81.706667l0.042667 81.664a32 32 0 0 1-63.701333 4.352l-0.298667-4.352V604.16H344.32a32 32 0 0 1-4.309333-63.658667l4.309333-0.298666h81.621333l0.042667-81.664a32 32 0 0 1 32-32z" />
    </Svg>
  )
})
export default ClickCopyOutline
