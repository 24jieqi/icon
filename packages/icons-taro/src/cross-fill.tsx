import React from 'react'

import { genFillIcon } from './gen'

const CrossFill = genFillIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <path fill="${color}" fill-rule="evenodd" d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14zm-18.391-5.818a.25.25 0 0 1 .347.006L16 14.232l4.044-4.044.006-.006a.25.25 0 0 1 .347.006l1.415 1.415.006.006a.25.25 0 0 1-.007.347L17.768 16l4.043 4.044.007.006a.25.25 0 0 1-.007.347l-1.414 1.415-.006.006a.25.25 0 0 1-.347-.006L16 17.768l-4.044 4.044-.006.006a.25.25 0 0 1-.347-.006l-1.415-1.415-.006-.006a.25.25 0 0 1 .006-.347L14.232 16l-4.044-4.044-.006-.006a.25.25 0 0 1 .006-.347l1.415-1.415.006-.006z" />
  </svg>`
})
export default CrossFill
