import type { IconData } from './fetch-xml'

export type GenCodeFN = (
  output: string,
  componentName: string,
  icon: IconData,
) => Promise<void>

export type GenDemo = (config: {
  name: string
  componentName: string
  output: string
  componentNames: string[]
}) => Promise<void>

export interface GenCodeConfig {
  name: string
  output: string
  removeIgnore: string[]
  genCodeFN: GenCodeFN
}
