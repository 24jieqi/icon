import fsPromise from 'fs/promises'

import type { IconPath, IconRect } from '../fetch-xml'
import { joinProps, ignorePropsBase } from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

const renderPath = (paths: IconPath[]) =>
  paths
    .map(p => {
      // 所有的图标都是 path 吗，待确认、优化
      return `<path ${joinProps(p.$, ignorePropsBase)} />`
    })
    .join('')

const renderRect = (rects: IconRect[]) =>
  rects
    .map(r => {
      return `<rect ${joinProps(r.$, ignorePropsBase)} />`
    })
    .join('')

export const genReact: GenCodeFN = (output, componentName, icon) => {
  const code = prettierTypescript(
    `import React from 'react'
      const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
        return (
          <svg
            {...props}
            ${joinProps(icon.$, ignorePropsBase)}
            focusable="false"
            width="1em"
            height="1em">
            ${
              icon.g
                ? icon.g.map(g => {
                    return `<g ${joinProps(g.$, ignorePropsBase)}>${renderPath(
                      g.path || [],
                    )}${renderRect(g.rect || [])}</g>`
                  })
                : ''
            }
            ${renderPath(icon.path || [])}
            ${renderRect(icon.rect || [])}
          </svg>
        )
      }
      export default ${componentName}
      `,
  )
  return fsPromise.writeFile(output, code)
}
