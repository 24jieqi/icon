import fsPromise from 'fs/promises'

import { joinProps, ignorePropsBase } from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

export const genReactNative: GenCodeFN = (output, componentName, icon) => {
  const code = prettierTypescript(
    `import React from 'react'
      import { Svg, Path } from 'react-native-svg'
      import { genIcon } from './gen'
      const ${componentName} = genIcon((color, size, props) => {
        return (
          <Svg {...props} ${joinProps(icon.$, [
            ...ignorePropsBase,
            'fill',
            'id',
          ])} width={size} height={size}>
          ${icon.path
            ?.map(p => {
              // 所有的图标都是 path 吗，待确认、优化
              return `<Path ${joinProps(p.$, [
                ...ignorePropsBase,
                'fill',
              ])} fill=${
                p.$.fill && p.$.fill !== 'currentColor'
                  ? `"${p.$.fill}"`
                  : '{color}'
              } />`
            })
            .join('')}
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(output, code)
}
