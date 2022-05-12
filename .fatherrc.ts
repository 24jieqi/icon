import type { IBundleOptions } from 'father-build/src/types.d'

const config: IBundleOptions = {
  runtimeHelpers: true,
  esm: 'babel',
  cjs: 'babel',
}

export default config
