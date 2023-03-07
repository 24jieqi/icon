import React from 'react'
import { Svg, G, Circle, Path } from 'react-native-svg'

import { genColoursIcon } from './gen'

const CircleXieColours = genColoursIcon(
  ({ size, color, strokeWidth }, props) => {
    return (
      <Svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        width={size}
        height={size}>
        <G>
          <Circle fill="#FAAD14" cy="12" cx="12" r="11" />
          <Path
            fill="#FFF"
            d="M11.14 9.561v.928h1.39v1.27h-1.39v.611h1.27v1.29h-1.27v1.06l1.339-.14-.01.62-.01.728q-.85.082-2.386.225-1.533.146-2.432.247l-.051-1.33q.062 0 .156-.01.095-.01.225-.02v-2.92h1.28v2.79l.63-.058v-3.093H7.67v-1.27h.811L7.48 9.852q.79-1 1.302-2.51l1.279.27q-.13.397-.241.658h2.591v1.29h-1.27Zm1.651-1.5h3.47v6.11q0 .729-.303 1.015-.3.283-1.019.283h-.66l-.218-1.13v2.452h-1.27v-8.73Zm2.2 1.308h-.93v4.772h.43q.308 0 .403-.084.098-.088.098-.358v-4.33Zm-5.11 1.12V9.56h-.67q-.33.609-.55.928h1.22Z"
          />
        </G>
      </Svg>
    )
  },
)
export default CircleXieColours
