import fsPromise from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { fetchXml } from './fetch-xml.js'
import { remove } from './fs.js'
import { genDemo } from './gen/demo.js'
import type { ComponentItem } from './gen/entry'
import { genEntry } from './gen/entry.js'
import { genReactNative } from './gen/react-native.js'
import { genReact } from './gen/react.js'
import { genTaro } from './gen/taro.js'
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
  type: 'app' | 'web' | 'taro',
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

  const finishedComponents: ComponentItem[] = []
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

  const exportCode = prettierTypescript(genEntry(finishedComponents))

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
  genCode('svg_10968_99.3034271b9ff4c6b392bd790683765895', 'app', {
    output: path.join(__dirname, '../packages/icons-react-native/src'),
    removeIgnore: ['gen.tsx'],
    genCodeFN: genReactNative,
    name: '@fruits-chain/icons-react-native',
  })
}

const genWebCode = () => {
  genCode('svg_10907_82.68f99ecbac03848f9fc70c53af3ba08a', 'web', {
    output: path.join(__dirname, '../packages/icons-react/src'),
    removeIgnore: [],
    genCodeFN: genReact,
    name: '@fruits-chain/icons-react',
    currentColor: true,
  })
}

const genTaroCode = () => {
  genCode('svg_26753_40.7e9e3a214d2852cd025ef3dfd871f64b', 'taro', {
    output: path.join(__dirname, '../packages/icons-taro/src'),
    removeIgnore: ['gen.tsx'],
    genCodeFN: genTaro,
    name: '@fruits-chain/icons-taro',
  })
}

if (argsObject.type === 'web') {
  genWebCode()
}

if (argsObject.type === 'app') {
  genAppCode()
}

if (argsObject.type === 'taro') {
  genTaroCode()
}
