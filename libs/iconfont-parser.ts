import fsPromise from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { fetchXml } from './fetch-xml.js'
import { remove } from './fs.js'
import { genDemo } from './gen/demo.js'
import { genReactNative } from './gen/react-native.js'
import { genReact } from './gen/react.js'
import { log } from './log.js'
import { prettierTypescript } from './prettier.js'

fetchXml().then(async data => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const dirReact = path.join(__dirname, '../packages/icons-react/src')
  const dirReactNative = path.join(
    __dirname,
    '../packages/icons-react-native/src',
  )

  log('FgCyan', '🟩 删除旧文件')

  // 删除 React 相关生成的文件
  await remove(dirReact)

  // 删除 React Native 相关生成的文件
  await remove(dirReactNative, ['helper'])

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

      return Promise.all([
        genReact(path.join(dirReact, `${filename}.tsx`), componentName, icon),
        genReactNative(
          path.join(dirReactNative, `${filename}.tsx`),
          componentName,
          icon,
        ),
      ])
    }),
  )

  log('FgGreen', '✅ 生成各组件新文件')

  const exportCode = prettierTypescript(`
    ${finishedComponents
      .map(c => `export { default as ${c.name} } from './${c.filename}'`)
      .join(';')}
  `)

  log('FgCyan', '🟩 入口文件')

  await Promise.all([
    fsPromise.writeFile(path.join(dirReact, `index.tsx`), exportCode),
    fsPromise.writeFile(path.join(dirReactNative, `index.tsx`), exportCode),
  ])

  log('FgGreen', '✅ 入口文件')

  log('FgCyan', '🟩 更新文档')
  const dirDocIcon = path.join(__dirname, '../docs/component/icon')

  // 排序
  outlineComponents.sort((a, b) => (a > b ? 1 : -1))
  fillComponents.sort((a, b) => (a > b ? 1 : -1))

  await Promise.all([
    genDemo('Outline', path.join(dirDocIcon, 'outline.tsx'), outlineComponents),
    genDemo('Fill', path.join(dirDocIcon, 'fill.tsx'), fillComponents),
  ])

  log('FgGreen', '✅ 更新文档')

  log('FgGreen', `🎉🎉🎉 图标库已经更新啦~，「yarn dev」查看新文档`)
})
