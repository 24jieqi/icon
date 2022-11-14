import fetch from 'node-fetch'
import { parseString } from 'xml2js'

import { log } from './log.js'

export interface IconLike {
  $: Record<string, string>
}

export interface IconG {
  $: {}
  defs?: {}[]
  g?: IconG[]
  path?: IconLike[]
  rect?: IconLike[]
}

export interface IconData extends Omit<IconG, '$'> {
  $: {
    id: string
    viewBox: string
    fill?: string
  }
}

export interface XmlData {
  svg: {
    symbol: IconData[]
  }
}

export const fetchXml = async (url: string) => {
  log('FgCyan', '🟩 加载远程资源')

  const data = await fetch(url)
  log('FgGreen', '✅ 加载远程资源')
  const dataText = await data.text()
  const matches = String(dataText).match(/'<svg>(.+?)<\/svg>'/)

  if (matches) {
    log('FgCyan', '🟩 转换成 XmlData')
    return new Promise<XmlData>((resolve, reject) => {
      parseString(`<svg>${matches[1]}</svg>`, (err, result_1) => {
        if (err) {
          reject(err)
        } else {
          log('FgGreen', '✅ 转换成 XmlData')
          resolve(result_1)
        }
      })
    })
  } else {
    return Promise.reject(new Error())
  }
}
