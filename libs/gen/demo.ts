import fsPromise from 'fs/promises'

import { prettierTypescript } from '../prettier.js'

export const genDemo = (
  componentName: string,
  filePath: string,
  componentNames: string[],
) => {
  const code = prettierTypescript(
    `import React from 'react'

    import { ${componentNames.join(',')} } from '@fruits-chain/icons-react'
    
    import Code from './code'
    
    const icons = [${componentNames
      .map(c => `{name: '${c}',Component: ${c}}`)
      .join(',')}
    ]
    
    const ${componentName}: React.FC = () => {
      return <Code icons={icons} />
    }
    
    export default ${componentName}`,
  )
  return fsPromise.writeFile(filePath, code)
}
