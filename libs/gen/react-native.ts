import fsPromise from 'fs/promises'

import type { IconPath } from '../fetch-xml'
import { excludeProps, ignorePropsBase, string2CamelCase } from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

const joinPropsAndReplaceCurrentColor = (
  props: Record<string, string>,
  exclude?: (string | ((s: string) => boolean))[],
) =>
  excludeProps(props, exclude)
    .map(([key, value]) => {
      let _value = value
      if (value === 'currentColor') {
        _value = '{color}'
      } else {
        _value = `"${value}"`
      }

      return `${string2CamelCase(key)}=${_value}`
    })
    .join(' ')

export const genReactNative: GenCodeFN = (output, componentName, icon) => {
  const renderPath = (paths: IconPath[]) =>
    paths
      .map(p => {
        // 所有的图标都是 path 吗，待确认、优化
        return `<Path ${joinPropsAndReplaceCurrentColor(p.$, [
          ...ignorePropsBase,
        ])} />`
      })
      .join('')
  const code = prettierTypescript(
    `import React from 'react'
    ${
      icon.g
        ? `import { Svg, G, Path } from 'react-native-svg'`
        : `import { Svg, Path } from 'react-native-svg'`
    }
      
      import { genIcon } from './gen'
      const ${componentName} = genIcon((color, size, props) => {
        return (
          <Svg {...props} ${joinPropsAndReplaceCurrentColor(icon.$, [
            ...ignorePropsBase,
            'fill',
            'id',
          ])} width={size} height={size}>
          ${
            icon.g
              ? icon.g.map(g => {
                  return `<G ${joinPropsAndReplaceCurrentColor(
                    g.$,
                    ignorePropsBase,
                  )}>${renderPath(g.path)}</G>`
                })
              : ''
          }
          ${renderPath(icon.path || [])}
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(output, code)
}
