---
title: 快速上手
order: 1
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

> 通过本章节你可以了解到图标库的安装方法和基本使用姿势，以 `@fruits-chain/icons-react` 为例。

## 安装

### 通过 npm 安装

在现有项目中使用图标库时，可以通过 npm 或 yarn 进行安装

```bash
## npm
npm i @fruits-chain/icons-react

## yarn
yarn add @fruits-chain/icons-react

## @fruits-chain/icons-react-icon 还需要额外安装 react-native-svg
```

## 引入组件

### 自动按需引入组件 (推荐)

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```bash
# 安装插件
yarn add babel-plugin-import --dev
```

在 babel.config.js 中添加配置

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@fruits-chain/icons-react",
        "libraryDirectory": "es" // JavaScript，如果是 TypeScript 可以直接使用 `src`
      }
    ]
  ]
}
```

### 使用组件

```tsx | pure
import React from 'react'
import { SuccessOutline } from '@fruits-chain/icons-react'

const App: React.FC = () => {
  // @fruits-chain/icons-react-icon 的组件则是 <SuccessOutline color="#098" size={20} />
  return (
    <span style={{ color: '#098', fontSize: 20 }}>
      <SuccessOutline />
    </span>
  )
}
```

## 常见问题

待收集。
