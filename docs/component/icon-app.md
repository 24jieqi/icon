---
title: App 图标
order: 1
nav:
  title: 组件
---

# App 图标

语义化的矢量图形。

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react'
import { ArrowDownOutline } from '@fruits-chain/icons-react-native'

export default () => {
  return (
    <ArrowDownOutline
      color="#098"
      size={40}
      onPress={() => {
        console.log('onPress')
      }}
    />
  )
}
```

## 线框风格

<code compact inline src="./icon-app/outline.tsx" />

## 实底风格

<code compact inline src="./icon-app/fill.tsx" />

## 多彩风格

<code compact inline src="./icon-app/colours.tsx" />
