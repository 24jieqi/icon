import fsPromise from 'fs/promises'

import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

export const genReact: GenCodeFN = (output, componentName, icon) => {
  const code = prettierTypescript(
    `import React from 'react'
      const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
        return (
          <svg
            {...props}
            viewBox="${icon.$.viewBox}"
            focusable="false"
            width="1em"
            height="1em"
            fill="currentColor">
            ${icon.path.map(p => `<path d="${p.$.d}" />`).join('')}
          </svg>
        )
      }
      export default ${componentName}
      `,
  )
  return fsPromise.writeFile(output, code)
}
