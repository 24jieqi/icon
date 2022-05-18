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
          <Svg {...props} width={size} height={size} viewBox="${
            icon.$.viewBox
          }" fill={color} fillRule="nonzero">
          ${icon.path.map(p => `<Path d="${p.$.d}" />`).join('')}
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(filePath, code)
}
