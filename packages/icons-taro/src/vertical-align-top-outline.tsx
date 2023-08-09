import React from 'react'

import { genOutlineIcon } from './gen'

const VerticalAlignTopOutline = genOutlineIcon(({ color, strokeWidth }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <path d="M24.008 14.1V42M12 26l12-12 12 12M12 6h24" stroke="${color}" stroke-width="${
    strokeWidth || 4
  }" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`
})
export default VerticalAlignTopOutline
