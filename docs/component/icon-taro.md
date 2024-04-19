---
title: Taro 图标
order: 1
nav:
  title: 组件
---

# Taro 图标

语义化的矢量图形。

[icon-taro-npm-url]: https://www.npmjs.com/package/@fruits-chain/icons-taro

[![](https://img.shields.io/npm/v/@fruits-chain/icons-taro.svg)][icon-taro-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/icons-taro.svg)][icon-taro-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
[![install size](https://packagephobia.com/badge?p=@fruits-chain/icons-taro)](https://packagephobia.com/result?p=@fruits-chain/icons-taro)

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { ArrowDownOutline } from '@fruits-chain/icons-taro'

export default () => {
  return (
    <>
      <ArrowDownOutline
        color="#987"
        size={40}
        strokeWidth={1}
        onClick={() => {
          console.log('onClick1')
        }}
        disabled
      />
      <ArrowDownOutline
        color="#876"
        size={40}
        strokeWidth={2}
        onClick={() => {
          console.log('onClick2')
        }}
      />
      <ArrowDownOutline
        color="#765"
        size={40}
        strokeWidth={3}
        onClick={() => {
          console.log('onClick3')
        }}
      />
      <ArrowDownOutline
        color="#654"
        size={40}
        strokeWidth={4}
        onClick={() => {
          console.log('onClick4')
        }}
      />
    </>
  )
}
```

## 线框风格

> 支持 `size`、`color`、`strokeWidth` 自定义属性。

<code compact inline src="./icon-taro/outline.tsx"></code>

## 实底风格

> 支持 `size`、`color` 自定义属性。

<code compact inline src="./icon-taro/fill.tsx"></code>

## 多彩风格

> 支持 `size` 自定义属性。

<code compact inline src="./icon-taro/colours.tsx"></code>
