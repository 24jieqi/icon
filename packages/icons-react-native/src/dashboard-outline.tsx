import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { genIcon } from './helper/gen'
const DashboardOutline = genIcon((color, size, props) => {
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      fillRule="nonzero">
      <Path d="M896 134.304H128c-17.673 0-32 14.327-32 32V704c0 17.673 14.327 32 32 32h768c17.673 0 32-14.327 32-32V166.304c0-17.673-14.327-32-32-32z m-32.001 63.999v473.696h-704V198.303h704z" />
      <Path d="M704 428.8c17.673 0 32 14.327 32 32 0 60.19-23.892 116.676-65.608 158.392-12.497 12.497-32.758 12.497-45.255 0-12.372-12.372-12.495-32.354-0.371-44.878l0.371-0.377c29.535-29.535 46.521-69.292 46.858-111.847l0.005-1.29c0-17.673 14.327-32 32-32z m-192-192c32.069 0 63.245 6.763 91.9 19.668 16.115 7.257 23.295 26.204 16.038 42.318-7.258 16.114-26.204 23.294-42.318 16.037-20.434-9.202-42.657-14.023-65.62-14.023-88.366 0-160 71.634-160 160 0 42.61 16.691 82.499 45.972 112.239l0.89 0.898c12.498 12.497 12.498 32.758 0 45.255-12.496 12.497-32.757 12.497-45.254 0C311.892 577.476 288 520.989 288 460.8c0-123.712 100.288-224 224-224z" />
      <Path d="M677.99 317.77c6.776 6.776 7.263 17.603 1.123 24.96L550.886 496.364c-12.937 15.5-35.99 17.578-51.49 4.641a36.556 36.556 0 0 1-2.425-2.216c-14.277-14.276-14.277-37.423 0-51.699a36.557 36.557 0 0 1 2.425-2.216L653.03 316.648c7.357-6.14 18.183-5.653 24.959 1.123z" />
      <Path d="M678 803.2c17.673 0 32 14.327 32 32 0 17.496-14.042 31.713-31.47 31.996l-0.53 0.004H346c-17.673 0-32-14.327-32-32 0-17.496 14.042-31.713 31.47-31.996l0.53-0.004h332z" />
    </Svg>
  )
})
export default DashboardOutline
