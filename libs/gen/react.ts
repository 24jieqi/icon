import fsPromise from 'fs/promises'

import { joinProps } from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

export const genReact: GenCodeFN = (output, componentName, icon) => {
  const code = prettierTypescript(
    `import React from 'react'
      const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
        return (
          <svg
            {...props}
            ${joinProps(icon.$)}
            focusable="false"
            width="1em"
            height="1em">
            ${icon.path
              ?.map(p => {
                // 所有的图标都是 path 吗，待确认、优化
                return `<path ${joinProps(p.$, [
                  (s: string) => /^data-/.test(s),
                ])} />`
              })
              .join('')}
          </svg>
        )
      }
      export default ${componentName}
      `,
  )
  return fsPromise.writeFile(output, code)
}
