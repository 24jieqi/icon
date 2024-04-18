import fsPromise from 'fs/promises'

import type { GenDemo } from '../interface'
import { prettierTypescript } from '../prettier'

export const genDemo: GenDemo = async ({
  componentName,
  output,
  componentNames,
  name,
  currentColor = false,
}) => {
  const code = await prettierTypescript(
    `import React from 'react'

    import { ${componentNames.join(',')} } from '${name}'
    
    import Code from '../icon/code'
    
    const icons: {name: string, Component: any}[] = [${componentNames
      .map(c => `{name: '${c}',Component: ${c}}`)
      .join(',')}
    ]
    
    const ${componentName}: React.FC = () => {
      return <Code icons={icons} currentColor={${JSON.stringify(
        currentColor,
      )}} />
    }
    
    export default ${componentName}`,
  )
  return fsPromise.writeFile(output, code)
}
