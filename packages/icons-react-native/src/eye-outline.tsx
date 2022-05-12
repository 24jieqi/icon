import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const EyeOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M503.338667 224.554667c109.738667 0 219.221333 52.693333 324.266666 139.776a1000.832 1000.832 0 0 1 106.112 102.4l13.653334 15.573333 8.832 10.496 7.253333 9.088a32 32 0 0 1-0.085333 39.253333l-10.026667 12.16-12.714667 14.677334-14.549333 16.042666a995.114667 995.114667 0 0 1-98.645333 92.757334c-105.045333 85.845333-214.442667 137.813333-324.096 137.813333-109.866667 0-216.32-52.224-316.032-138.368a903.424 903.424 0 0 1-99.712-101.290667l-12.672-15.445333-5.674667-7.168-9.258667-12.288a32 32 0 0 1-0.128-37.034667l3.584-4.949333 11.349334-14.762667 12.629333-15.658666 6.997333-8.32a909.824 909.824 0 0 1 92.714667-94.378667c99.712-87.424 206.208-140.373333 316.202667-140.373333z m0 64c-91.648 0-184.874667 46.336-274.005334 124.501333a846.464 846.464 0 0 0-98.645333 102.784l-4.394667 5.418667 4.266667 5.248 12.458667 14.805333a840.106667 840.106667 0 0 0 86.186666 86.485333c89.088 77.056 182.357333 122.794667 274.133334 122.794667 92.074667 0 188.928-45.994667 283.605333-123.349333a931.712 931.712 0 0 0 105.813333-101.674667l3.712-4.309333-3.882666-4.48-13.568-15.104a937.472 937.472 0 0 0-92.245334-88.064c-94.677333-78.464-191.445333-125.056-283.434666-125.056z m10.581333 73.386666a160.170667 160.170667 0 1 1 0 320.298667 160.170667 160.170667 0 0 1 0-320.298667z m0 64a96.170667 96.170667 0 1 0 0 192.298667 96.170667 96.170667 0 0 0 0-192.298667z" />
    </Svg>
  )
})
export default EyeOutline
