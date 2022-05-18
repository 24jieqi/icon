import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const HomeSettingOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M495.969 138.61a32 32 0 0 1 31.617-0.254l0.445 0.254 320 185.238A32.01 32.01 0 0 1 864 351.068V462.244c0 17.673-14.327 32-32 32-17.496 0-31.713-14.042-31.996-31.47l-0.004-0.53v-92.251L511.999 203.278l-288 166.716v468.31h216.434c17.497 0 31.713 14.042 31.996 31.47l0.004 0.53c0 17.496-14.042 31.713-31.47 32H192c-17.496 0-31.713-14.042-32-31.47V351.542a32 32 0 0 1 15.559-27.453l0.41-0.242 320-185.238z" />
      <Path d="M480 448c17.496 0 31.713 14.042 31.996 31.47l0.004 0.53c0 17.673-14.327 32-32 32H352c-17.496 0-31.713-14.042-31.996-31.47L320 480c0-17.673 14.327-32 32-32h128zM800 544H608a32 32 0 0 0-27.713 16l-96 166.276a32 32 0 0 0 0 32l96 166.28a32 32 0 0 0 27.713 16h192a32 32 0 0 0 27.713-16l96-166.28a32 32 0 0 0 0-32l-96-166.276A32 32 0 0 0 800 544zM781.525 608l77.525 134.277-77.526 134.279H626.475l-77.526-134.279 77.525-134.277h155.051z" />
      <Path d="M704 672c35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64z" />
    </Svg>
  )
})
export default HomeSettingOutline