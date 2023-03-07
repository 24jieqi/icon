import React from 'react'
import { Svg, G, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const QQColours = genColoursIcon(({ size, color, strokeWidth }, props) => {
  return (
    <Svg {...props} viewBox="0 0 24 24" fill="none" width={size} height={size}>
      <G>
        <Path
          fill="#37A0F4"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z"
        />
        <Path
          fill="#FFF"
          d="M17.638 16.404c-.308.038-1.202-1.412-1.202-1.412 0 .839-.434 1.934-1.37 2.727.454.14 1.471.515 1.23.922-.195.33-3.364.211-4.28.107-.916.102-4.085.222-4.28-.107-.244-.407.774-.782 1.226-.922-.937-.79-1.368-1.885-1.368-2.727 0 0-.895 1.45-1.203 1.412-.145-.019-.332-.793.252-2.67.276-.884.59-1.621 1.077-2.834-.083-3.132 1.213-5.76 4.296-5.76 3.05 0 4.374 2.575 4.296 5.76.485 1.21.801 1.95 1.077 2.833.581 1.878.391 2.655.25 2.671Z"
        />
      </G>
    </Svg>
  )
})
export default QQColours
