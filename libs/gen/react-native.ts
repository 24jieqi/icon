import fsPromise from 'fs/promises'

import lodash from 'lodash'

import type { SVGGroupElementProps, BaseSVGElementProps } from '../fetch-xml'
import {
  excludeProps,
  ignorePropsBase,
  string2CamelCase,
  string2UpperFirst,
} from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

const joinProps = (props: Record<string, string>) => {
  return Object.entries(props)
    .map(([key, value]) => `${string2CamelCase(key)}=${value}`)
    .join(' ')
}

const renderTag = (
  tag: string,
  props: Record<string, string>,
  children: string,
) => {
  return `<${tag} ${joinProps(props)}${
    children ? `>${children}</${tag}>` : ' />'
  }`
}

export const genReactNative: GenCodeFN = async (
  output,
  componentName,
  svgProps,
) => {
  const isOutline = /Outline$/.test(componentName)
  const isColours = /Colours$/.test(componentName)
  const correctionProps = (props: BaseSVGElementProps['$']) => {
    return Object.entries(props).reduce<BaseSVGElementProps['$']>(
      (prev, [key, value]) => {
        if (isOutline && key === 'stroke-width') {
          prev[key] = `{strokeWidth || ${value}}`
        } else {
          if (value === 'currentColor') {
            prev[key] = '{color}'
          } else {
            prev[key] = `"${value}"`
          }
        }

        return prev
      },
      {},
    )
  }

  const tags: string[] = ['Svg']
  const collectTagName = (tag: string) => {
    if (!tags.includes(tag)) {
      tags.push(tag)
    }
  }
  const renderIcon = (icon: SVGGroupElementProps): string => {
    return Object.entries(icon)
      .map(([key, props]) => {
        if (props.length) {
          const _props = props as SVGGroupElementProps[]
          const tag = string2UpperFirst(key)

          collectTagName(tag)

          return _props
            .map(prop => {
              return renderTag(
                tag,
                correctionProps(
                  excludeProps(
                    (prop.$ as BaseSVGElementProps['$']) || {},
                    ignorePropsBase,
                  ),
                ),
                renderIcon(lodash.omit(prop, ['$']) || {}),
              )
            })
            .join('')
        }

        return ''
      })
      .join('')
  }

  const elements: SVGGroupElementProps = lodash.omit(svgProps, ['$'])
  const elementsJSX = renderIcon(elements)

  const genFNString = isColours
    ? 'genColoursIcon'
    : isOutline
      ? 'genOutlineIcon'
      : 'genFillIcon'

  const code = await prettierTypescript(
    `import React from 'react'
     import { ${tags.join(',')} } from 'react-native-svg'

     import { ${genFNString} } from './gen'

     const ${componentName} = ${genFNString}(({size,color,strokeWidth}, props) => {
        return (
          <Svg {...props} ${joinProps(
            correctionProps(
              excludeProps(svgProps.$, [...ignorePropsBase, 'id']),
            ),
          )} width={size} height={size}>
          ${elementsJSX}
          </Svg>
        )
      })
      export default ${componentName}
      `,
  )

  return fsPromise.writeFile(output, code)
}
