import fsPromise from 'fs/promises'

import type { IconData } from '../fetch-xml'
import { prettierTypescript } from '../prettier.js'

export const genReact = (
  filePath: string,
  componentName: string,
  icon: IconData,
) => {
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
            <path d="${icon.path[0].$.d}" />
          </svg>
        )
      }
      export default ${componentName}
      `,
  )
  return fsPromise.writeFile(filePath, code)

  // const finishedComponents: {
  //   name: string
  //   filename: string
  // }[] = []
  // await Promise.all(
  //   data.svg.symbol.map(async icon => {
  //     const filename = icon.$.id.replace(/^icon-/, '')
  //     const ComponentName = `-${filename}`.replace(
  //       /(\-([a-z]))/g,
  //       (_, __, p2) => {
  //         return p2.toUpperCase()
  //       },
  //     )
  //     const code = prettierTypescript(
  //       `import React from 'react'
  //     const ${ComponentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  //       return (
  //         <svg
  //           {...props}
  //           viewBox="${icon.$.viewBox}"
  //           focusable="false"
  //           width="1em"
  //           height="1em"
  //           fill="currentColor"
  //           fillRule="nonzero">
  //           <path d="${icon.path[0].$.d}" />
  //         </svg>
  //       )
  //     }
  //     export default ${ComponentName}
  //     `,
  //     )
  //     await fsPromise.writeFile(
  //       path.join(dirReactNative, `${filename}.tsx`),
  //       code,
  //     )
  //     finishedComponents.push({
  //       filename,
  //       name: ComponentName,
  //     })
  //   }),
  // )
  // const exportCode = prettierTypescript(`
  //   ${finishedComponents
  //     .map(c => `export { default as ${c.name} } from './${c.filename}'`)
  //     .join(';')}
  // `)
  // await fsPromise.writeFile(path.join(dirReactNative, `index.tsx`), exportCode)
}
