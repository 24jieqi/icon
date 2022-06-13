<div align="center">
🎨 SVG Icons.
</div>

## React

[icon-react-npm-url]: https://www.npmjs.com/package/@fruits-chain/icons-react

<div align="center">

[![](https://img.shields.io/npm/v/@fruits-chain/icons-react.svg)][icon-react-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/icons-react.svg)][icon-react-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
[![install size](https://packagephobia.com/badge?p=@fruits-chain/icons-react)](https://packagephobia.com/result?p=@fruits-chain/icons-react)

</div>

## React Native

[icon-react-native-npm-url]: https://www.npmjs.com/package/@fruits-chain/icons-react-native

<div align="center">

[![](https://img.shields.io/npm/v/@fruits-chain/icons-react-native.svg)][icon-react-native-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/icons-react-native.svg)][icon-react-native-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
[![install size](https://packagephobia.com/badge?p=@fruits-chain/icons-react-native)](https://packagephobia.com/result?p=@fruits-chain/icons-react-native)

</div>

## 开发过程中遇见的一些问题

### ts-node

#### node-fetch

package.json

```json
{ "type": "module" }
```

tsconfig.json

```json
{
  "ts-node": {
    "esm": true
  }
}
```

`node-fetch` 采用 ES Module 写法，需要项目里面也一起用，要么用最新的 `2.x` 版本。

#### import module

一般情况内部引入模块可以忽略后缀名，但是 `"type": "module"` 需要手动指定为 `.js`

- [点击查看 typescript 相关说明](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#type-in-package-json-and-new-extensions)
- [点击查看 ts-node 相关互动](https://github.com/TypeStrong/ts-node/issues/1736)

> Relative import paths need full extensions (we have to write import "./foo.js" instead of import "./foo").

### ES Module

#### \_\_dirname 和 \_\_filename

```ts
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
```
