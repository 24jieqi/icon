import prettierConfigPreset from '@fruits-chain/prettier-config-preset'
import * as prettier from 'prettier'

export const prettierTypescript = (code: string) =>
  prettier.format(code, { ...prettierConfigPreset, parser: 'typescript' })
