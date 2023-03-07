import fsPromise from 'fs/promises'

import type {} from '../fetch-xml'
import { joinProps, ignorePropsBase } from '../helper.js'
import type { GenCodeFN } from '../interface'
import { prettierTypescript } from '../prettier.js'

// const renderTag = (
//   tag: string,
//   props: Record<string, string>,
//   children: string,
// ) => {
//   return `<${tag} ${joinProps(props, ignorePropsBase)}${
//     children ? `>${children}</${tag}>` : ' />'
//   }`
// }

// const renderIcon = (icon: IconG): string => {
//   return Object.entries(icon)
//     .map(([key, value]: [string, IconLike[]]) => {
//       if (key !== '$' && value?.length) {
//         return value
//           .map(p => {
//             return renderTag(key, p.$, key === 'g' ? renderIcon(p) : '')
//           })
//           .join('')
//       }

//       return ''
//     })
//     .join('')
// }

export const genReact: GenCodeFN = (
  output,
  componentName,
  { defs, ...icon },
) => {
  const code = ''
  // const code = prettierTypescript(
  //   `import React from 'react'
  //     const ${componentName}: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  //       return (
  //         <svg
  //           {...props}
  //           ${joinProps(icon.$, ignorePropsBase)}
  //           focusable="false"
  //           width="1em"
  //           height="1em">
  //           ${renderIcon(icon)}
  //         </svg>
  //       )
  //     }
  //     export default ${componentName}
  //     `,
  // )
  return fsPromise.writeFile(output, code)
}
