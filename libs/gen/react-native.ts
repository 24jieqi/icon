import fsPromise from 'fs/promises'

import type { IconData } from '../fetch-xml'
import { prettierTypescript } from '../prettier.js'

export const genReactNative = (
  filePath: string,
  componentName: string,
  icon: IconData,
) => {
  const code = prettierTypescript(
    `import React from 'react'
      import { Svg, Path } from 'react-native-svg'
      import { genIcon } from './helper/gen'
      const ${componentName} = genIcon((color, size, props) => {
        return (
          <Svg {...props} width={size} height={size} viewBox="${icon.$.viewBox}" fill={color} fillRule="nonzero">
            <Path d="${icon.path[0].$.d}" />
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(filePath, code)

  // await Promise.all(
  //   data.svg.symbol.map(icon => {
  //     const filename = icon.$.id.replace(/^icon-/, '')
  //     const ComponentName = `-${filename}`.replace(
  //       /(\-([a-z]))/g,
  //       (_, __, p2) => {
  //         return p2.toUpperCase()
  //       },
  //     )
  //     const code = prettierTypescript(
  //       `import React from 'react'
  //     import { Svg, Path } from 'react-native-svg'
  //     import { genIcon } from './helper/gen'
  //     const ${ComponentName} = genIcon((color, size, props) => {
  //       return (
  //         <Svg {...props} width={size} height={size} viewBox="${icon.$.viewBox}" fill={color} fillRule="nonzero">
  //           <Path d="${icon.path[0].$.d}" />
  //         </Svg>
  //       )
  //     })
  //     export default ${ComponentName}
  //     `,
  //     )
  //     return fsPromise.writeFile(
  //       path.join(dirReactNative, `${filename}.tsx`),
  //       code,
  //     )
  //   }),
  // )
}
