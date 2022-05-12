import type { ColorValue } from 'react-native'
import type { SvgProps } from 'react-native-svg'

export interface IconCommonProps extends SvgProps {
  /**
   * 图标大小
   * @default 24
   */
  size?: number

  /**
   * 图片颜色
   * @default '#5A6068'
   */
  color?: ColorValue

  /**
   * svg 内部的样式
   */
  svgStyle?: SvgProps['style']

  /**
   * 可点击的范围大小
   * @default 44
   */
  touchableSize?: number
}
