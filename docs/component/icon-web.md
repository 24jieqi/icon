---
title: web 图标
order: 1
nav:
  title: 组件
---

# web 图标

语义化的矢量图形。

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

<code compact inline src="./icon-web/outline.tsx" />

## 实底风格

<code compact inline src="./icon-web/fill.tsx" />

## 多彩风格

<code compact inline src="./icon-web/colours.tsx" />
