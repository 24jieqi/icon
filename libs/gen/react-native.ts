import fsPromise from 'fs/promises'

import type { IconLike, IconG } from '../fetch-xml'
import {
  excludeProps,
  ignorePropsBase,
  string2CamelCase,
  string2UpperFirst,
} from '../helper.js'
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

const renderTag = (
  tag: string,
  props: Record<string, string>,
  children: string,
) => {
  return `<${tag} ${joinPropsAndReplaceCurrentColor(props, ignorePropsBase)}${
    children ? `>${children}</${tag}>` : ' />'
  }`
}

const renderIcon = (icon: IconG, callback: (tag: string) => void): string => {
  return Object.entries(icon)
    .map(([key, value]: [string, IconLike[]]) => {
      if (key !== '$' && value?.length) {
        const tag = string2UpperFirst(key)

        callback(tag)

        return value
          .map(p => {
            return renderTag(
              tag,
              p.$,
              key === 'g' ? renderIcon(p, callback) : '',
            )
          })
          .join('')
      }

      return ''
    })
    .join('')
}

export const genReactNative: GenCodeFN = (
  output,
  componentName,
  { defs, ...icon },
) => {
  const tags: string[] = ['Svg']
  const callback = (tag: string) => {
    if (!tags.includes(tag)) {
      tags.push(tag)
    }
  }
  const iconJSX = renderIcon(icon, callback)

  const code = prettierTypescript(
    `import React from 'react'
     import { ${tags.join(',')} } from 'react-native-svg'

     import { genIcon } from './gen'
     const ${componentName} = genIcon((color, size, props) => {
        return (
          <Svg {...props} ${joinPropsAndReplaceCurrentColor(icon.$, [
            ...ignorePropsBase,
            'fill',
            'id',
          ])} width={size} height={size}>
          ${iconJSX}
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(output, code)
}
