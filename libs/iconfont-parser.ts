import fsPromise from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { fetchXml } from './fetch-xml'
import { remove } from './fs'
import { genDemo } from './gen/demo'
import { genReact } from './gen/react'
import { genReactNative } from './gen/react-native'
import type { GenCodeConfig } from './interface'
import { log } from './log'
import { prettierTypescript } from './prettier'

const argsObject = process.argv
  .slice(2)
  .reduce<Record<string, any>>((prev, current) => {
    const values = current.split('=')
    if (values.length >= 2) {
      prev[values[0]] = values[1]
    }
    return prev
  }, {})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const genCode = async (
  id: string,
  type: 'app' | 'web',
  { output, removeIgnore, genCodeFN, name }: GenCodeConfig,
) => {
  const data = await fetchXml(`https://at.alicdn.com/t/${id}.js`)

  log('FgCyan', '🟩 删除旧文件')

  // 删除 React 相关生成的文件
  await remove(output, removeIgnore)

  log('FgGreen', '✅ 删除旧文件')

  const finishedComponents: {
    name: string
    filename: string
  }[] = []
  const outlineComponents: string[] = []
  const fillComponents: string[] = []

  log('FgCyan', '🟩 生成各组件新文件')

  await Promise.all(
    data.svg.symbol.map(icon => {
      const iconName = icon.$.id.replace(/^icon-/, '')
      const isFill = /-fill$/.test(iconName)
      const filename = isFill ? iconName : `${iconName}-outline`
      const componentName = `-${filename}`.replace(
        /(\-([a-z]))/g,
        (_, __, p) => {
          return p.toUpperCase()
        },
      )

      if (isFill) {
        fillComponents.push(componentName)
      } else {
        outlineComponents.push(componentName)
      }

      finishedComponents.push({
        name: componentName,
        filename,
      })

      return genCodeFN(
        path.join(output, `${filename}.tsx`),
        componentName,
        icon,
      )
    }),
  )

  log('FgGreen', '✅ 生成各组件新文件')

  const exportCode = await prettierTypescript(`
      ${finishedComponents
        .map(c => `export { default as ${c.name} } from './${c.filename}'`)
        .join(';')}
    `)

  log('FgCyan', '🟩 入口文件')

  await fsPromise.writeFile(path.join(output, `index.ts`), exportCode)

  log('FgGreen', '✅ 入口文件')

  log('FgCyan', '🟩 更新文档')
  const dirDocIcon = path.join(__dirname, `../docs/component/icon-${type}`)

  // 排序
  outlineComponents.sort((a, b) => (a > b ? 1 : -1))
  fillComponents.sort((a, b) => (a > b ? 1 : -1))

  await Promise.all([
    genDemo({
      name,
      output: path.join(dirDocIcon, 'outline.tsx'),
      componentName: 'Outline',
      componentNames: outlineComponents,
    }),
    genDemo({
      name,
      output: path.join(dirDocIcon, 'fill.tsx'),
      componentName: 'Fill',
      componentNames: fillComponents,
    }),
  ])

  log('FgGreen', '✅ 更新文档')

  log('FgGreen', `🎉🎉🎉 图标库已经更新啦~，「yarn dev」查看新文档`)
}

const genAppCode = () => {
  genCode('font_3392834_vaet93bcor', 'app', {
    output: path.join(__dirname, '../packages/icons-react-native/src'),
    removeIgnore: ['gen.tsx'],
    genCodeFN: genReactNative,
    name: '@fruits-chain/icons-react-native',
  })
}

const genWebCode = () => {
  genCode('font_3420768_ihacqy4yg3', 'web', {
    output: path.join(__dirname, '../packages/icons-react/src'),
    removeIgnore: [],
    genCodeFN: genReact,
    name: '@fruits-chain/icons-react',
  })
}

if (argsObject.type === 'web') {
  genWebCode()
}

if (argsObject.type === 'app') {
  genAppCode()
}
