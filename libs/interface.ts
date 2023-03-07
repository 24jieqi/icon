import type { SVGElementProps } from './fetch-xml'

export type GenCodeFN = (
  output: string,
  componentName: string,
  icon: SVGElementProps,
) => Promise<void>

export type GenDemo = (config: {
  name: string
  componentName: string
  output: string
  componentNames: string[]
  currentColor?: boolean
}) => Promise<void>

export interface GenCodeConfig {
  name: string
  output: string
  removeIgnore: string[]
  genCodeFN: GenCodeFN
  currentColor?: boolean
}
