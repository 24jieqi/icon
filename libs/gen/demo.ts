import fsPromise from 'fs/promises'

import type { GenDemo } from '../interface'
import { prettierTypescript } from '../prettier.js'

export const genDemo: GenDemo = ({
  componentName,
  output,
  componentNames,
  name,
}) => {
  const code = prettierTypescript(
    `import React from 'react'

    import { ${componentNames.join(',')} } from '${name}'
    
    import Code from '../icon/code'
    
    const icons = [${componentNames
      .map(c => `{name: '${c}',Component: ${c}}`)
      .join(',')}
    ]
    
    const ${componentName}: React.FC = () => {
      return <Code icons={icons} />
    }
    
    export default ${componentName}`,
  )
  return fsPromise.writeFile(output, code)
}
