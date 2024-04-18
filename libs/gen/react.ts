import fsPromise from 'fs/promises'

import lodash from 'lodash'

import type { SVGGroupElementProps, BaseSVGElementProps } from '../fetch-xml'
import { joinProps, ignorePropsBase } from '../helper'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier'

const renderTag = (
  tag: string,
  props: Record<string, string>,
  children: string,
) => {
  return `<${tag} ${joinProps(props, ignorePropsBase)}${
    children ? `>${children}</${tag}>` : ' />'
  }`
}

const renderIcon = (icon: SVGGroupElementProps): string => {
  return Object.entries(icon)
    .map(([key, props]) => {
      if (props.length) {
        const _props = props as SVGGroupElementProps[]

        return _props
          .map(prop => {
            return renderTag(
              key,
              (prop.$ as BaseSVGElementProps['$']) || {},
              renderIcon(lodash.omit(prop, ['$']) || {}),
            )
          })
          .join('')
      }

      return ''
    })
    .join('')
}

export const genReact: GenCodeFN = async (output, componentName, svgProps) => {
  const elements: SVGGroupElementProps = lodash.omit(svgProps, ['$'])

  const code = await prettierTypescript(
    `import React from 'react'
      const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
        return (
          <svg
            {...props}
            ${joinProps(svgProps.$, ignorePropsBase)}
            focusable="false"
            width="1em"
            height="1em">
            ${renderIcon(elements)}
          </svg>
        )
      }
      export default ${componentName}
      `,
  )
  return fsPromise.writeFile(output, code)
}
