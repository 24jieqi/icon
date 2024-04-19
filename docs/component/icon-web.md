---
title: web 图标
order: 1
nav:
  title: 组件
---

# web 图标

语义化的矢量图形。

[icon-react-npm-url]: https://www.npmjs.com/package/@fruits-chain/icons-react

[![](https://img.shields.io/npm/v/@fruits-chain/icons-react.svg)][icon-react-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/icons-react.svg)][icon-react-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
[![install size](https://packagephobia.com/badge?p=@fruits-chain/icons-react)](https://packagephobia.com/result?p=@fruits-chain/icons-react)

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { ApartmentOutline } from '@fruits-chain/icons-react'

export default () => {
  return (
    <span style={{ color: '#098', fontSize: 40 }}>
      <ApartmentOutline
        onClick={() => {
          console.log('onClick')
        }}
      />
    </span>
  )
}
```

## 线框风格

<code compact inline src="./icon-web/outline.tsx"></code>

## 实底风格

<code compact inline src="./icon-web/fill.tsx"></code>

## 多彩风格

<code compact inline src="./icon-web/colours.tsx"></code>
