import fsPromise from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { fetchXml } from './fetch-xml.js'
import { remove } from './fs.js'
import { genDemo } from './gen/demo.js'
import { genReactNative } from './gen/react-native.js'
import { genReact } from './gen/react.js'
import { string2CamelCase } from './helper.js'
import type { GenCodeConfig } from './interface'
import { log } from './log.js'
import { prettierTypescript } from './prettier.js'

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
  { output, removeIgnore, genCodeFN, name, currentColor }: GenCodeConfig,
) => {
  const data = await fetchXml(
    `https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/${id}.js`,
  )

  // console.log(JSON.stringify(data.svg.symbol))

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
  const coloursComponents: string[] = []

  log('FgCyan', '🟩 生成各组件新文件')

  await Promise.all(
    data.svg.symbol.map(icon => {
      // iconpark 不会已 icon- 开头
      const iconName = icon.$.id
      const isFill = /-fill$/.test(iconName)
      const isColours = /-colours$/.test(iconName)
      const filename = isFill || isColours ? iconName : `${iconName}-outline`
      const componentName = string2CamelCase(`-${filename}`)

      if (isFill) {
        fillComponents.push(componentName)
      } else if (isColours) {
        coloursComponents.push(componentName)
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

  const exportCode = prettierTypescript(`
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
  coloursComponents.sort((a, b) => (a > b ? 1 : -1))

  await Promise.all([
    genDemo({
      name,
      output: path.join(dirDocIcon, 'outline.tsx'),
      componentName: 'Outline',
      componentNames: outlineComponents,
      currentColor,
    }),
    genDemo({
      name,
      output: path.join(dirDocIcon, 'fill.tsx'),
      componentName: 'Fill',
      componentNames: fillComponents,
      currentColor,
    }),
    genDemo({
      name,
      output: path.join(dirDocIcon, 'colours.tsx'),
      componentName: 'Colours',
      componentNames: coloursComponents,
      currentColor,
    }),
  ])

  log('FgGreen', '✅ 更新文档')

  log('FgGreen', `🎉🎉🎉 图标库已经更新啦~，「yarn dev」查看新文档`)
}

const genAppCode = () => {
  genCode('svg_10968_52.cf0e90056a2c7e15d0d79658ac47426b', 'app', {
    output: path.join(__dirname, '../packages/icons-react-native/src'),
    removeIgnore: ['gen.tsx'],
    genCodeFN: genReactNative,
    name: '@fruits-chain/icons-react-native',
  })
}

const genWebCode = () => {
  genCode('svg_10907_57.6ef62dff46326f094f854ad0e54f4257', 'web', {
    output: path.join(__dirname, '../packages/icons-react/src'),
    removeIgnore: [],
    genCodeFN: genReact,
    name: '@fruits-chain/icons-react',
    currentColor: true,
  })
}

if (argsObject.type === 'web') {
  genWebCode()
}

if (argsObject.type === 'app') {
  genAppCode()
}
