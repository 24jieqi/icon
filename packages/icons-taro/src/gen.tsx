import { View } from '@tarojs/components'
import type { ViewProps } from '@tarojs/components'
import React, { memo } from 'react'

export interface IconCommonProps extends Omit<ViewProps, 'children' | 'style'> {
  style?: React.CSSProperties
  /**
   * 图标大小
   * @default '16px'
   */
  size?: number | string

  /**
   * 图标颜色
   * @default '#5A6068'
   */
  color?: string

  /**
   * Outline 的路径宽
   */
  strokeWidth?: number

  disabled?: boolean

  /**
   * 可点击的大小比例
   * @default 1.4
   */
  touchableScale?: number
}

export type IconOutlineProps = IconCommonProps

export type IconFillProps = Omit<IconCommonProps, 'strokeWidth'>

export type IconColoursProps = Omit<IconCommonProps, 'color'>

type IconRender = (config: { color?: string; strokeWidth?: number }) => string

const defaultDisabledStyle: React.CSSProperties = {
  opacity: 0.4,
  pointerEvents: 'none',
}

/**
 * 生成一个 Outline 类型的 icon 组件
 */
export const genIcon = (render: IconRender): React.FC<IconCommonProps> => {
  return memo(
    ({
      size = '16px',
      color = '#5A6068',
      strokeWidth,
      disabled,
      touchableScale = 1.4,
      ...restProps
    }) => {
      return (
        <View
          {...restProps}
          style={{
            position: 'relative',
            display: 'inline-block',
            width: size,
            height: size,
            backgroundImage: `url('data:image/svg+xml, ${encodeURIComponent(
              render({
                color,
                strokeWidth,
              }),
            )}')`,
            ...(disabled ? defaultDisabledStyle : undefined),
            ...restProps.style,
          }}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              transform: `scale(${touchableScale})`,
            }}
          />
        </View>
      )
    },
  )
}

export const genFillIcon = (render: IconRender): React.FC<IconFillProps> =>
  genIcon(render)

export const genOutlineIcon = (
  render: IconRender,
): React.FC<IconOutlineProps> => genIcon(render)

export const genColoursIcon = (
  render: IconRender,
): React.FC<IconColoursProps> => genIcon(render)
