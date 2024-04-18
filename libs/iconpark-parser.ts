import fsPromise from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { fetchXml } from './fetch-xml'
import { remove } from './fs'
import { genDemo } from './gen/demo'
import type { ComponentItem } from './gen/entry'
import { genEntry } from './gen/entry'
import { genReact } from './gen/react'
import { genReactNative } from './gen/react-native'
import { genTaro } from './gen/taro'
import { string2CamelCase } from './helper'
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

  const exportCode = await prettierTypescript(genEntry(finishedComponents))

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
  genCode('svg_10968_115.d8be5a2d4a184ebdd5e1b0433864347b', 'app', {
    output: path.join(__dirname, '../packages/icons-react-native/src'),
    removeIgnore: ['gen.tsx'],
    genCodeFN: genReactNative,
    name: '@fruits-chain/icons-react-native',
  })
}

const genWebCode = () => {
  genCode('svg_10907_106.9beb1d36dbe4cbcec404ba7b66f0ea3f', 'web', {
    output: path.join(__dirname, '../packages/icons-react/src'),
    removeIgnore: [],
    genCodeFN: genReact,
    name: '@fruits-chain/icons-react',
    currentColor: true,
  })
}

const genTaroCode = () => {
  genCode('svg_26753_64.9d2cb98abb421d1d8df95a7de36d0d65', 'taro', {
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
